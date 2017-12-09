import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Summary extends Component{
  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
      customerName: '',
      trailerName:'',
      zip: '',
      result: 'error',
      Title: 'error',
      Actors: 'error',
      Plot: 'error',
      Poster: 'error',
      Imdb: 'error',
      Released: 'error',
      imdbId:'error',
      ytId:''
    };
  }

  componentWillReceiveProps(nextProps){
    console.log('Props in summary*************',nextProps);
  }

  componentWillMount() {
    var search='';
    console.log('prosp....',this.props);
    const self=this;
    const { steps, step } = this.props;
    console.log('steps............',step);
    const { movieName, trailerName, customerName,zip } = steps;
    if (step.id === '13' || step.id === '16'){
      search = movieName.value;
    } else if (step.id === '19') {
      search = trailerName.value;
    }
    console.log(search);
    const url = `http://www.omdbapi.com/?apikey=cc75c508&t=${search}`;
    var xhttp = new XMLHttpRequest();
    console.log('Search from url...............',url);
    xhttp.addEventListener("load",function() {
    if (xhttp.readyState == 4) {
      const data = JSON.parse(this.responseText);
      if (data.Response=="True") {
      console.log('Search from db...............',data);
      self.state.imdbId = data.imdbID;
        self.setState({
          movieName,
          trailerName,
          customerName,
          zip,
          result: true,
          Title: data.Title,
          Actors: data.Actors,
          Plot: data.Plot,
          Poster: data.Poster,
          Imdb: data.imdbRating,
          Released: data.Released,
          imdbId: data.imdbID,
        });
        console.log("state &&&&&",self.state);
      }
      else{
        self.setState({ movieName,trailerName,customerName,zip,result: false,Title: 'Not Found',  Actors: 'Not Found',
              Plot: 'Not Found',Poster: 'Not Found',Imdb: 'Not Found',Released: 'Not Found',imdbId:'Not Found'});
      }
    }
  });
    xhttp.open("GET", url, false);
    xhttp.send();
    if(this.props.step.id === '16' || this.props.step.id === '19'){
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      var imdbKey = '';
      var youtubeQuery ='';
      const searchQuery = this.state.imdbId;
      console.log('Search Query................',searchQuery);
      const url = `https://api.themoviedb.org/3/movie/${searchQuery}/videos?language=en-US&api_key=7ac7707374be52ca83d0123ac58398eb`;
      xhr.addEventListener("load", function () {
        if (this.readyState == 4) {
          const data = JSON.parse(this.responseText);
          console.log('Search results..............',data.results[0].key);
          imdbKey = data.results[0].key;
          youtubeQuery = "http://www.youtube.com/embed/"+ imdbKey;
          self.setState({
            ytId: youtubeQuery
          })
          console.log('-----------------',imdbKey);

          console.log('youtubeQuery.............',youtubeQuery);
        }
      });
      xhr.open("GET", url, false);
      xhr.send();
    }
  }

  trailerJSX (){
    console.log('-------------',this.state);
    return(
      <div>
        <iframe src={this.state.ytId} />
      </div>
    )
  }

  render(){
    console.log('------------rendering Summary----------------------');
    return(
     <div>
      { this.props.step.id === '13' ?
          <div>
            <p> Details: <br/> {this.state.customerName.value} , {this.state.zip.value}</p>
              { this.state.result ?
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="span2">Items</th>
                        <th className="span2">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <th scope="row">Title</th>
                      <td>{this.state.Title}</td>
                    </tr>
                    <tr>
                      <th scope="row">Actors</th>
                      <td>{this.state.Actors}</td>
                    </tr>
                    <tr>
                      <th scope="row">Plot</th>
                      <td>{this.state.Plot}</td>
                    </tr>
                    <tr>
                      <th scope="row">Released</th>
                      <td>{this.state.Released}</td>
                    </tr>
                    <tr>
                      <th scope="row">Imdb Ratings</th>
                      <td>{this.state.Imdb}</td>
                    </tr>
                  </tbody>
                </table>
          :
            <p>No results, Try Again</p>
          }
        </div>
      : this.state.result ?
                              this.props.step.id === '16' || this.props.step.id === '19' ?
                              <div>
                                {this.trailerJSX()}
                              </div>
                              :
                              null
                          : <p>No trailer found</p>
    }
    </div>
    );
  }
}

Summary.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.function
};

Summary.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined
};

export default Summary;
