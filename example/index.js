import { h, render, Component } from 'preact'
import level from 'level'
import { Value } from '..'

const db = window.db = level('/tmp/level-react')

class Example extends Component {
  render () {
    return <div id="example">
        Value: <strong><Value db={db} key="key" /></strong>
      </div>
  }
}

render(<Example />, document.body)
