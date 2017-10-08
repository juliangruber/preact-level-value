import { h, render, Component } from 'preact'
import level from 'level'

const db = level('/tmp/level-react')
window.db = db

const on = (db, key, fn) => {
  const onput = (_key, value) => _key === key && fn(value)
  db.on('put', onput)
  db.get(key, (err, value) => {
    if (value) fn(value)
  })
  const stop = () => db.removeListener('put', onput)
  return { stop }
}

class Example extends Component {
  constructor () {
    super()
    this.state = { value: '' }
    this.subscription = null
  }

  componentDidMount () {
    this.subscription = on(db, 'key', value => this.setState({ value }))
  }

  componentWillUnmount () {
    this.subscription.stop()
  }

  render () {
    return <div id="example">
        <ul>
          <li>Value: <strong>{this.state.value}</strong></li>
        </ul>
      </div>
  }
}

render(<Example />, document.body)
