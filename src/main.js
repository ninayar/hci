import React from 'react';
import ReactDOM from 'react-dom'
import AwesomeComponent from './AwesomeComponent'
import Chat from './Chat'
import Button from './Button'

class App extends React.Component {
  render () {
    return(
      <div>
    <h3> Hello React</h3>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <AwesomeComponent />
              </div>
              <div className="col-sm">
                <Button/>
              </div>
            </div>
          </div>
          </div>
        )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
