import React from 'react';
import ReactDOM from 'react-dom';

import IPFSClientWrapper from './IPFSClientWrapper'
import App from './App';

ReactDOM.render(
  <IPFSClientWrapper>
    <App />
  </IPFSClientWrapper>,
  document.getElementById('root'));
