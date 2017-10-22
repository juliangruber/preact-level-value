import { render, Component } from 'preact'
import subscribe from 'level-value'

export class Value extends Component {
  constructor ({ db, key }) {
    super()
    this.state = { value: '' }
    this.subscription = null
    this.db = db
    this.key = key
  }

  componentDidMount () {
    this.subscription = subscribe(this.db, this.key)
    this.subscription.on('value', value => this.setState({ value }))
  }

  componentWillUnmount () {
    this.subscription.off()
  }

  render () {
    return this.state.value
  }
}
