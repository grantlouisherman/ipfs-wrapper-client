import React, { Component } from 'react';

class App extends Component {
  render() {
    const { Block } = this.props
    return (
        <div className="App">
          <header>
            <p>
              Edit THIS<code>src/App.js</code> and save to reload.
            </p>
            <Block client={this.props.client}>
              {
                  ({ data }) => {
                    return(
                      <div>{data}</div>
                    )
                  }
                }
            </Block>
          </header>
        </div>
    )
  }
}

export default App
