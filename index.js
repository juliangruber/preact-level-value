import { render, Component } from 'preact'

export class Value extends Component {
  constructor ({ db, key }) {
    super()
    this.state = { value: '' }
    this.onput = this.onput.bind(this)
    this.db = db
    this.key = key
  }

  onput (key, value) {
    if (key === this.key) this.setState({ value })
  }

  componentDidMount () {
    this.db.get(this.key, (_, value) => value && this.setState({ value }))
    this.db.on('put', this.onput)
  }

  componentWillUnmount () {
    this.db.removeListener('put', this.onput)
  }

  render () {
    return this.state.value
  }
}
