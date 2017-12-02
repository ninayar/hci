import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
// import PureRenderMixin from 'react-addons-pure-render-mixin';

import { FloatingButton } from 'react-buttons';

class Example extends Component {
  constructor(props) {
    super(props);
    // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.onClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const {id} = event.target;
    console.log(id);
  }

  render() {
    return (
      <div>
        <FloatingButton faIcon="plus" label= "blah" id="1" onClick={this.onClick}/>
      </div>
    )
  }
}

export default Example;
