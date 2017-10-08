import { h, render, Component } from 'preact'
import level from 'level'

const db = level('/tmp/level-react')

class List extends Component {
  componentDidMount () {
    console.log('did mount')
  }
  render () {
    return
      <div id="foo">
          <span>Hello, world!</span>
          <button onClick={ e => alert("hi!") }>Click Me</button>
      </div>
  }
}

render(<List />, document.body)
