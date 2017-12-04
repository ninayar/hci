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
              <p className="lead">Chat with our chatbot who can assist you in buying a movie ticket</p>
              </div>
               <div className="row text-center text-lg-left">
              <div className="col-lg-3 col-md-4 col-xs-6">
              <figure className="figure">
                <a href="#" className="d-block mb-4 h-100">
                  <img className="img-fluid img-thumbnail" src="src/img/1.jpg" alt=""/>
                </a>
                <figcaption className="figure-caption text-center lead">Starwars : Last Jedi</figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-xs-6">
              <figure className="figure">
                <a href="#" className="d-block mb-4 h-100">
                  <img className="img-fluid img-thumbnail" src="src/img/2.jpg" alt=""/>
                </a>
                <figcaption className="figure-caption text-center lead">Justice League(2017)</figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-xs-6">
              <figure className="figure">
                <a href="#" className="d-block mb-4 h-100">
                  <img className="img-fluid img-thumbnail" src="src/img/3.jpg" alt=""/>
                </a>
                <figcaption className="figure-caption text-center lead">Thor : Ragnarok</figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-xs-6">
              <figure className="figure">
                <a href="#" className="d-block mb-4 h-100">
                  <img className="img-fluid img-thumbnail" src="src/img/4.jpg" alt=""/>
                </a>
                <figcaption className="figure-caption text-center lead">Coco</figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-xs-6">
              <figure className="figure">
                <a href="#" className="d-block mb-4 h-100">
                  <img className="img-fluid img-thumbnail" src="src/img/5.jpg" alt=""/>
                </a>
                <figcaption className="figure-caption text-center lead">War of the Planet of Apes</figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-xs-6">
              <figure className="figure">
                <a href="#" className="d-block mb-4 h-100">
                  <img className="img-fluid img-thumbnail" src="src/img/6.jpg" alt=""/>
                </a>
                <figcaption className="figure-caption text-center lead">Murder on the Oriet Express</figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-xs-6">
              <figure className="figure">
                <a href="#" className="d-block mb-4 h-100">
                  <img className="img-fluid img-thumbnail" src="src/img/7.jpg" alt=""/>
                </a>
                <figcaption className="figure-caption text-center lead">Wonder</figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-4 col-xs-6">
              <figure className="figure">
                <a href="#" className="d-block mb-4 h-100">
                  <img className="img-fluid img-thumbnail" src="src/img/8.jpg" alt=""/>
                </a>
                <figcaption className="figure-caption text-center lead">Jumanji : Welcome to the Jungle</figcaption>
                </figure>
              </div>
          		</div>
         </div>
        </div>
      </section>
    );
  }

}

export default Movie;
