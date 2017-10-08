import { h, render, Component } from 'preact'
import level from 'level'

const db = level('/tmp/level-react')
window.db = db

class Example extends Component {
  constructor () {
    super()
    this.state = { value: '' }
    this._update = this.update.bind(this)
  }

  update (key, value) {
    if (key === 'key') this.setState({ value: value })
  }

  componentDidMount () {
    db.on('put', this._update)
    db.get('key', (err, value) => {
      if (err) throw err
      this._update('key', value)
    })
  }

  componentWillUnmount () {
    db.removeListener('put', this._update)
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
