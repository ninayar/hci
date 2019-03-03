import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Trailer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      movieName: '' ,
      trailerName:'',
      imdbId:'error',
      ytId:''
    };
  }

  componentWillMount() {
    var search='';
    const self=this;
    const { steps, step } = this.props;
    const { trailerName } = steps;
    search = trailerName.value;
    const url = `http://www.omdbapi.com/?apikey=cc75c508&t=${search}`;
    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener("load",function() {
    if (xhttp.readyState == 4) {
      const data = JSON.parse(this.responseText);
      if (data.Response=="True") {
      self.state.imdbId = data.imdbID;
        self.setState({
          trailerName,
          result: true,
          imdbId: data.imdbID,
        });
      }
      else{
        self.setState({ trailerName,result: false,imdbId:'Not Found'});
      }
    }
  });
    xhttp.open("GET", url, false);
    xhttp.send();
    if(this.props.step.id === '19'){
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      var imdbKey = '';
      var youtubeQuery ='';
      const searchQuery = this.state.imdbId;
      const url = `https://api.themoviedb.org/3/movie/${searchQuery}/videos?language=en-US&api_key=7ac7707374be52ca83d0123ac58398eb`;
      xhr.addEventListener("load", function () {
        if (this.readyState == 4) {
          const data = JSON.parse(this.responseText);
          imdbKey = data.results[0].key;
          youtubeQuery = "http://www.youtube.com/embed/"+ imdbKey;
          self.setState({
            ytId: youtubeQuery
          })
        }
      });
      xhr.open("GET", url, false);
      xhr.send();
    }
  }

  render(){
    return(
     <div>
      {
        this.state.result ?
                            <iframe src={this.state.ytId} />
                          :
                           <p>No trailer found</p>

        }
    </div>
    );
  }
}

Trailer.propTypes = {
  steps: PropTypes.object
};

Trailer.defaultProps = {
  steps: undefined
};

export default Trailer;
