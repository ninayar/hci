import PropTypes from 'prop-types';
import ChatBot,{ Loading } from 'react-simple-chatbot';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat';

class MoviePedia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieName:avengers
    };
  }

  componentWillMount() {
    const self = this;
    const { steps } = this.props;
    const search = steps.search.value;
    // const endpoint = encodeURI('https://www.fandango.com/');
    // const query = encodeURI(`
    //   select * where {
    //   ?x rdfs:label "${search}"@en .
    //   ?x rdfs:comment ?comment .
    //   FILTER (lang(?comment) = 'en')
    //   } LIMIT 100
    // `);

    const queryUrl = `http://www.omdbapi.com/?apikey=cc75c508&s=${search}`;

    const xhr = new XMLHttpRequest();
    //
    // xhr.addEventListener('readystatechange', readyStateChange);
    //
    // function readyStateChange() {
    //   if (this.readyState === 4) {
    //     const data = JSON.parse(this.responseText);
    //     const bindings = data.results.bindings;
    //     if (bindings && bindings.length > 0) {
    //       self.setState({ loading: false, result: bindings[0].comment.value });
    //     } else {
    //       self.setState({ loading: false, result: 'Not found.' });
    //     }
    //   }
    // }

    xhr.open('GET', queryUrl);
    xhr.send();
  }

  // triggetNext() {
  //   this.setState({ trigger: true }, () => {
  //     this.props.triggerNextStep();
  //   });
  // }

  render() {
    const { movieName } = this.state;

    return (
      <div className="MoviePedia">
     <div>
        // <SearchBox fetchMovieID={this.fetchMovieID.bind(this)}/>
        // <Card data={this.state}/>
      </div>
      </div>
    );
  }
}

MoviePedia.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

MoviePedia.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};
const ExampleChat = () =>(
  <Chat/>
)


export default MoviePedia
