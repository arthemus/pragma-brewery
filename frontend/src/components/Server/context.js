import React from 'react'

const ServerContext = React.createContext(null)

export const withServer = (Component) => (props) => (
  <ServerContext.Consumer>
    {(config) => <Component {...props} server={config} />}
  </ServerContext.Consumer>
)

export default ServerContext
