import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import Server, { ServerContext } from './components/Server'

ReactDOM.render(
  <ServerContext.Provider value={Server}>
    <App />
  </ServerContext.Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
