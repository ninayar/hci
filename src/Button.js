import React, { Component } from 'react';
import ExampleChat from './Chat';

class Button extends Component {

  constructor (props) {
    super(props)
    this.state = { modalActive: false }
  }

  openModal ()  {
    this.setState({ modalActive: true })
  }

  closeModal  () {
    this.setState({ modalActive: false })
  }

  render () {
    return (
      <div>
       Trial
        <button onClick={this.openModal.bind(this)}>Open modal</button>
        {this.state.modalActive ?
          <div className='modalDialog'>
            <a title='Close' onClick={this.closeModal.bind(this)}>X</a>
            <ExampleChat/>
          </div>
          :null
        }
      </div>
    )
  }
}

export default Button;
