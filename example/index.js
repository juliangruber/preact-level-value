import { h, render, Component } from 'preact'
import level from 'level'
import { on } from '..'

const db = level('/tmp/level-react')
window.db = db

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
