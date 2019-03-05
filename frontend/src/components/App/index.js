import React from 'react'

import { withServer } from './../Server'

const INITIAL_STATE = {
  beers: [],
  isLoading: true,
  time: new Date().toLocaleTimeString()
}

class BeersListBase extends React.Component {
  constructor (props) {
    super(props)
    this.state = { ...INITIAL_STATE }
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState({ isLoading: true })
      window.fetch(this.props.server.host)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ beers: data, isLoading: false })
          this.setState({ time: new Date().toLocaleTimeString() })
        })
    }, 5000)
  }
  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    const { isLoading, beers, time } = this.state

    if (isLoading) {
      return <kbd>Loading...</kbd>
    }

    return (
      <div>
        <ul className='list-group'>
          {beers.map((b) => {
            let colorClass = 'list-group-item list-group-item-light'
            if (b.indexOf('heating') > -1) {
              colorClass = 'list-group-item list-group-item-danger'
            }
            return <li className={colorClass}>{b}</li>
          })}
          <li className='list-group-item'><kbd>List updated at {time}</kbd></li>
        </ul>
      </div>
    )
  }
}

const BeersList = withServer(BeersListBase)

const App = () => (
  <div className='container'>
    <center>
      <h3>Current Beers</h3>
      <hr />
      <BeersList />
    </center>
  </div>
)

export default App
