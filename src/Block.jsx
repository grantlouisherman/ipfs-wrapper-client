import React, { Component } from 'react'
import PropTypes from 'prop-types'
const BlockService = require('ipfs-block-service')
const Block_ = require('ipfs-block')
const multihashing = require('multihashing-async')
const IPFSRepo = require('ipfs-repo')  // storage repo

// import CID from 'cids'

class Block extends Component {
  constructor(){
    super()
    this.state = {
      data: ''
    }
  }
  render(){
    const { children, type } = this.props;
    const { data } = this.state
    return this.props.children(this.state)
  }

}

Block.propTypes = {
  type: PropTypes.string,
  cid: PropTypes.string,
  block: PropTypes.string
}

Block.defaultProps = {
  type: 'put',
  cid: '',
  block: ''
}

export default Block
