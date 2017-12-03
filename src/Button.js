import React, { Component } from 'react';
import MoviePedia from './MoviePedia';
import Chat from './Chat';
import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu';
import MdAdd from 'react-icons/lib/md/add';
import MdClose from 'react-icons/lib/md/close';
class Button extends Component {

  render () {
    return (
      <div><Chat/></div>
    )
  }
}

export default Button;
