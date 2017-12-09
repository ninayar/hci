import React, { Component } from 'react';
import MovieInfo from './MovieInfo';
import {InfoList} from './InfoList.js';
import { Collapse, Button, CardBody, Card } from 'reactstrap/lib/';


class Info extends Component {
  constructor(props) {
  super(props);
  this.toggle = this.toggle.bind(this);
  this.state = { collapse: false };
}
toggle() {
  this.setState({ collapse: !this.state.collapse });
}


  list= InfoList;

  renderMovies(){
    var renderInfoJSX = this.list.map(function (movieListInner, index) {
      return (
        <div className="col-lg-3 col-md-4 col-xs-6" key={"movie"+index}>
          <Card>
            <CardBody>
              <figure className="figure">
              <img className="img-fluid img-thumbnail" onClick={this.toggle} src={movieListInner.poster} alt="alternate" />
              <figcaption className="figure-caption text-center lead">{movieListInner.Name}</figcaption>
              </figure>
              <Collapse isOpen={this.state.collapse}>
              <MovieInfo movieName={movieListInner.Name} customerName='guest' zip='11201'/>
              </Collapse>
            </CardBody>
          </Card>

        </div>
      );
  }.bind(this));
  return(
    <div className="row text-center text-lg-left">
          {renderInfoJSX}
      </div>
    );
  }



  render () {
    return (
      <div className="container">
  <div className="row">
    <div className="col-lg-8 mx-auto">
      <h2>Movies</h2>
      <p className="lead">Chat with our chatbot who can assist you in buying a movie ticket</p>
      </div>
      <div className="d-inline-flex p-2">
      {this.renderMovies()}
      </div>
 </div>
</div>
    )
  }
}

export default Info;
