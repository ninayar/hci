import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { Button, IconButton, HamburgerButton, FloatingButton, FlatButton } from 'react-buttons';

class Example extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <Button faIcon="plus" onClick={/* sommething */}>New Thing</Button>
        <Button materialIcon="favorite" iconBefore={true} onClick={/* sommething */}>Favorite</Button>

        <IconButton faIcon="plus" label="Add a new thing" onClick={/* something */} />
        <IconButton materialIcon="favorite" label="Add this as a favorite" onClick={/* something */} />

        <HamburgerButton active={false} size="lg" onClick={/* something */} />
        <HamburgerButton active={this.props.btnActive} onClick={/* toggle */} />

        <FlatButton color="primary" onClick={/* something */} />

        <FloatingButton faIcon="plus" label="Add a new thing" onClick={/* something */} />
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('app'));
