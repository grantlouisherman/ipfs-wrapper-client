import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CID from 'cids'
import BlockService from 'ipfs-block-service'
import Block from 'ipfs-block'
import multihashing from 'multihashing-async'
import IPFSRepo from 'ipfs-repo'  // storage repo


class Blocks extends Component {
  constructor(){
    super()
    this.state = {
      data: '',
      bs: '',
      block: ''
    }
    this.createData = this.createData.bind(this)
    this.createBlock = this.createBlock.bind(this)
  }

  createData(type, blockData){
    return type === 'file' ?
    Buffer.from(blockData) :
    new Buffer(blockData)
  }
  createBlock(data, multihash){
    const cid = new CID(multihash)
    const block = new Block(data, cid)
    return { cid, block }
  }

  componentDidMount(){
    const { blockData, type, repo } = this.props
    const data = this.createData(type, blockData)
    // setup a repo
    const ipfsRepo = new IPFSRepo(repo)
    ipfsRepo.init({ cool: 'config' }, (err) => {
      if (err) {
        throw err
      }
      ipfsRepo.open((err) => {
        if (err) {
          throw err
        }

        multihashing(data, 'sha2-256', (err, multihash) => {
          if (err) {
            throw err
          }
          const getBlock = this.createBlock(data, multihash)
          const block = getBlock.block
          const cid = getBlock.cid

          // create a service
          const bs = new BlockService(ipfsRepo)
          // add the block, then retrieve it
          bs.put(block, (err) => {
            if (err) {
              console.log(err)
            }
            bs.get(cid, (err, b) => {
              if (err) {
                throw err
              }
              this.setState({data:block.data.toString()})
            })
          })
        })
    })
  })

  }
  render(){
    const { data } = this.state
    return this.props.children({data})
  }

}

Block.propTypes = {
  type: PropTypes.string,
  blockData: PropTypes.string
}

Block.defaultProps = {
  type: 'string',
  blockData: 'HELLO',
}

export default Blocks
