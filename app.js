const Dilithium = require('./utils/mini-react')

class App extends Dilithium.Component {
  render() {
    return (
      <div>
        <span>
          <h1 style={{ color: 'red' }} >Heading 1</h1>
          <SmallHeader />
          <h2 style={{ color: 'yellow' }} >Heading 2</h2>
        </span>
        <h3>Heading 3</h3>
      </div>
    )
  }
}

class SmallHeader extends Dilithium.Component {
  render() {
    return (
      <h5>SmallHeader</h5>
    )
  }
}

Dilithium.render(<App />, document.getElementById('root'))