import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import CID from 'cids'

class Block extends Component  {
  constructor(props){
    super(props)
    this.state = {
      data: ''
    }
  }
  componentDidMount(){
    window.blockEventListener = this.blockEventListener
  }
  blockEventListener = event => {
    const { type } = this.props
    this[type]()
  }
  get = () => {}
  put = () => {
    const buf = new Buffer('a serialized object')
    this.props.client.block.put(buf, (err, block) => {
      if (err) { console.log(new Error(err))}
      // Block has been stored
      this.setState({data: block.data.toString()})
    })
  }
  stat = () => {}
  render(){
    const { children, type } = this.props;
    const { data } = this.state
    const Generic = React.cloneElement(this.props.children, { data })
    return type === 'get' ? children({data}) : Generic
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
