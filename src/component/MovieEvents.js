import React from 'react';
import s from  '../css/Movie.css';
import {MovieList} from './MovieList.js';
import ReactPlayer from 'react-player';

class MovieEvents extends React.Component {
  state={
    play: false,
    src: ''
  }

  movieList = MovieList;

  onPlayClick(link,event){
    console.log("link..............",link);
    this.setState({
      play: true,
      src: link
    });
  }

  onCloseClick(){
    this.setState({
      play:false
    })
  }

  renderMovies(){
    var renderMoviesJSX = this.movieList.map(function (movieListInner, index) {
      return(
        <div style={{marginBottom:'30px'}}>
          <div style={{marginBottom:'10px',fontWeight:'bolder',fontSize:'16px'}}>{movieListInner.title}</div>
            <div style={{display:'flex', flexWrap:'wrap'}} key={index}>
            {
              movieListInner.movieArray.map(function (category) {
                return(
                  <div className="root" >
                      <div className="container">
                        <div className="image_container">
                          <img src={category.poster} alt="alternate" className="image" />
                        </div>
                        <div className="des">
                          <div className="course_title">
                            {category.Name}
                          </div>
                          <div className="author_name">
                            {category.ReleaseDate}
                          </div>
                        </div>
                      </div>
                  <div className="hover_effect"></div>
                    <div className="close_button" onClick={this.onCloseClick.bind(this)}>X</div>
                    <div className="play_button" onClick={this.onPlayClick.bind(this,category.TrailerLink)} >Play Trailer</div>
                  </div>
                );
              }.bind(this))
            }
          </div>
      </div>
      );
  }.bind(this));
  return(
      <div style={{width:'850px'}}>
          {renderMoviesJSX}
      </div>
    );
  }


  render() {
    console.log("state link......",this.state.link);
    return(
    <section id="event" className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Upcoming Events</h2>
            <p className="lead">Here are some of the upcoming movies</p>
              {
                this.state.play ?
                  <div style={{marginLeft:"85px",marginBottom:"30px"}}>
                    <ReactPlayer
                      url= {this.state.src} />
                  </div>
                  :
                  null
              }
              {this.renderMovies()}
           </div>
         </div>
      </div>
    </section>
    );
  }
}
export default MovieEvents;
