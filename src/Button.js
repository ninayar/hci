import React, { Component } from 'react';
import MoviePedia from './MoviePedia';
import Chat from './Chat';
import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu';
import MdAdd from 'react-icons/lib/md/add';
import MdClose from 'react-icons/lib/md/close';
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
  //     <div>
  //   <FloatingMenu slideSpeed={500} direction="left">
  //   <MainButton
  //     iconResting={MdAdd}
  //     iconActive={MdClose}
  //     iconColor="white"
  //     backgroundColor="black"
  //     buttonSize="56"
  //     onClick={this.openModal.bind(this)}
  //   />
  // </FloatingMenu>
  //   {this.state.modalActive ?
  //     <div className='modalDialog'>
  //       <a title='Close' onClick={this.closeModal.bind(this)}>X</a>
  //       <ExampleChat/>
  //     </div>
  //     :null
  //   }
  //   </div>
  // <a href="#top-section" className="btn-floating btn-large red" onClick={this.openModal.bind(this)}>
  //     <i className="fa fa-arrow-up"></i>
  // </a>


      <div>
      <div className="Collapse" id="ChatBox">
      {this.state.modalActive ?
        <div className='modalDialog'>
          <a title='Close' onClick={this.closeModal.bind(this)}>X Close</a>
          <Chat/>
        </div>
        :null
      }
      </div>
      <button className="btn btn-primary" href="#ChatBox" type="button" onClick={this.openModal.bind(this)} data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      ChatNow
      </button>
      </div>
    )
  }
}

export default Button;
