import React from 'react';
import Button from './Button'
import AwesomeComponent from './AwesomeComponent'



class Movie extends React.Component {

  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Movies</h2>
              <p className="lead">Chat with our chatbot who can assist you in buying a movie ticket:</p>
              </div>
          </div>
        </div>
      </section>
    );
  }

}

export default Movie;
