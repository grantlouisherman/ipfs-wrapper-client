import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { initClient } from './utils'
import Block from './Block'

class IPFSClientWrapper extends Component {
  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, {
          client: initClient(this.props.host,
          this.props.port,
          this.props.protocol),
          Block
        })}
      </div>
    )
  }
}

IPFSClientWrapper.propTypes = {
  children: PropTypes.element.isRequired
};
export default IPFSClientWrapper
