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
    this.fetchBeers()
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  fetchBeers () {
    this.interval = setInterval(() => {
      this.setState({ isLoading: true })
      window
        .fetch(`${this.props.server.host}/api`)
        .then(response => response.json())
        .then(data => {
          this.setState({ beers: data, isLoading: false })
          this.setState({ time: new Date().toLocaleTimeString() })
        })
    }, 5000)
  }

  render () {
    const { isLoading, beers, time } = this.state

    if (isLoading) {
      return <kbd>Loading...</kbd>
    }

    return (
      <div>
        <ul className='list-group'>
          {beers.map((b, index) => {
            let colorClass = 'list-group-item list-group-item-light'
            if (b.indexOf('heating') > -1) {
              colorClass = 'list-group-item list-group-item-danger'
            }
            return (
              <li key={index} className={colorClass}>
                {b}
              </li>
            )
          })}
          <li className='list-group-item'>
            <kbd>List updated at {time}</kbd>
          </li>
        </ul>
      </div>
    )
  }
}

const BeersList = withServer(BeersListBase)

const App = () => (
  <div className='container'>
    <center>
      <h3>Current Temperature of Beers</h3>
      <hr />
      <BeersList />
    </center>
  </div>
)

export default App
