import { h, render, Component } from 'preact'
import level from 'level'
import { Value } from '..'

const db = window.db = level('/tmp/preact-level-value')

class Example extends Component {
  random () {
    db.put('key', Math.random())
  }
  render () {
    return <div id="example">
        Push this button:<br />
        <button onclick={ this.random }>Random!</button><br /><br />
        Or execute this snippet in the console:<br />
        <pre>db.put('key', Math.random())</pre><br />
        Live value: <strong><Value db={db} key="key" /></strong>
      </div>
  }
}

render(<Example />, document.body)
