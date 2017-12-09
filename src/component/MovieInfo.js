import React , { Component } from 'react';
import PropTypes from 'prop-types';
import {Summary} from './chat';

class MovieInfo extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Summary movieName={this.props.movieName}
                  customerName={this.props.customerName}
                  zip={this.props.zip}/>
      </div>
    )
  }
}


Summary.propTypes = {
  steps: PropTypes.object,

};

Summary.defaultProps = {
  steps: undefined,
};

export default MovieInfo;
