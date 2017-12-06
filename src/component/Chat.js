import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatBot,{ Loading } from 'react-simple-chatbot';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import {fetchJsonp} from 'fetch-jsonp'

class Summary extends Component{
  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
      customerName: '',
      zip: '',
      result: 'error',
      Title: 'error',
      Actors: 'error',
      Plot: 'error',
      Poster: 'error',
      Imdb: 'error',
      Released: 'error'
    };
  }

  componentWillMount() {
    const self=this;
    const { steps } = this.props;
    const { movieName,customerName,zip } = steps;

    const search = movieName.value;
    console.log(search);
    const url = `http://www.omdbapi.com/?apikey=cc75c508&t=${search}`;
    console.log(url);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4) {
      const data = JSON.parse(this.responseText);
      console.log(data);
      if (data.Response=="True") {
        console.log(data.Poster);

        self.setState({ movieName,customerName,zip,result: "True", Title: data.Title,  Actors: data.Actors,
              Plot: data.Plot,Poster: data.Poster,Imdb: data.imdbRating,Released: data.Released});
      }
      else{
        self.setState({ movieName,customerName,zip,result: 'Not Found',Title: 'Not Found',  Actors: 'Not Found',
              Plot: 'Not Found',Poster: 'Not Found',Imdb: 'Not Found',Released: 'Not Found'});
      }
    }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }

  render(){
    const {movieName,customerName,zip,result,Title,Actors,Plot,Poster,Imdb,Released} = this.state;
    const PosterURL = {Poster};
    console.log({PosterURL})

    return(
      <div>
        <p> Details: <br/> {customerName.value} , {zip.value}</p>
        <h4>Movie Deatils</h4>
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
          <td>{Title}</td>
        </tr>
        <tr>
          <th scope="row">Actors</th>
          <td>{Actors}</td>
        </tr>
        <tr>
          <th scope="row">Plot</th>
          <td>{Plot}</td>
        </tr>
        <tr>
          <th scope="row">Released</th>
          <td>{Released}</td>
        </tr>
        <tr>
          <th scope="row">Imdb Ratings</th>
          <td>{Imdb}</td>
        </tr>
      </tbody>
        </table>
      :
        <p>No results.Try Again</p>
      }
      </div>
    );
  }
}

Summary.propTypes = {
  steps: PropTypes.object,
};

Summary.defaultProps = {
  steps: undefined,
};

class NearBy extends Component{
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      length: 'error',
      data0 : {title: 'error', showtimes: ['error']},
      data1 : ['error'],
      data2 : ['error'],
      data3 : ['error'],
      data4 : ['error'],
    };
  }

  componentWillMount() {
    const self = this;
    const { steps } = this.props;
    const { zip } = steps;
    const search = zip.value;
    console.log(search);
    const nearUrl =  `http://data.tmsapi.com/v1.1/movies/showings?startDate=2017-12-05&api_key=bdyduv2xctgvynxd79b9jfu8&zip=${search}`;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4) {
    const length =this.responseText.length;
    console.log(length);
    var indents = [];
    for (var i = 0; i < 5; i++) {
      indents.push(JSON.parse(this.responseText)[i]);
    }
    var data = indents ;

    console.log(data[0].showtimes);

    if (data) {
      self.setState({ zip, length: length, data0: {title: data[0].title, showtimes: [data[0].showtimes]},
        data1:data[1], data2: data[2], data3:data[3], data4:data[4] });
    }
    else{
      self.setState({ zip, length: 'n/A' });

    }
  }
  };
  xhttp.open("GET", nearUrl);
  xhttp.send();
  }

  render(){
    const {zip} = this.state;
    console.log("in render");
    var showtimes0=[];
    for(var i=0; i<this.state.data0.showtimes.length;i++)
    {
      showtimes0.push(this.state.data0.showtimes[i]);
    }

    return(

      <div style={{width: '100%'} }>
        <p>
          Details: {zip.value}</p>
        <p>
          Number of Movies : {length}</p>
        <div>
          <p>Theaters: The top 5 are shown</p>
          <table classname="table table-bordered">
            <tbody>
              <tr>
                <td>{this.state.data0.title}</td>
              </tr>
              <tr>
              <td>
              {

                showtimes0.map((item) => (
                  <td key={index}>[item]</td>
              ))

            }
          </td>
          </tr>
        </tbody>
      </table>

        </div>
      </div>
    );
  }
}

NearBy.propTypes = {
  steps: PropTypes.object,
};

NearBy.defaultProps = {
  steps: undefined,
};


class Chat extends Component {

  render(){
    return (

      <ChatBot
      floating	= {true}
      steps = {[
        {
          id: '0',
          message: 'Welcome to MovieTix!',
          trigger: '1',
        },
        {
          id: '1',
          message: 'What is your name?',
          trigger: 'customerName',
          },
          {
            id: 'customerName',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you!',
            trigger: 4,
          },
          {
            id: '4',
            message: 'What is your zip code?',
            trigger: 'zip',
          },
          {
            id: 'zip',
            user: true,
            trigger: '5',
          },
          {
            id: '5',
            message: 'What can I do for you?',
            trigger: '6',
          },
          {
         id: '6',
         options: [
           { value: 1, label: 'Buy Movie Tickets', trigger: '7' },
           { value: 2, label: 'Look up movies near by', trigger: 'Near1' },
           { value: 3, label: 'Watch movie trailers', trigger: '6' },
         ],
       },

       {
         id: 'Near1',
         component: <NearBy/>,
         trigger: '6',
       },
       {
         id: '7',
         message: 'Awesome! Lets start',
         trigger: '9',
       },
       {
         id: '9',
         message: 'Do you know what movie you want to buy tickets for?',
         trigger: '10',
       },
       {
      id: '10',
      options: [
        { value: 1, label: 'Yes', trigger: '12' },
        { value: 2, label: 'No', trigger: '11' },
      ],
      },
      {
        id: '11',
        message: 'Not supported yet!! :(',
        trigger: '9',
      },
      {
        id: '12',
        message: 'What is the movie you want to buy ticket for?',
        trigger: 'movieName',
      },
      {
        id: 'movieName',
        user: true,
        trigger: '13',
      },
      {
        id: '13',
        component: <Summary />,
        trigger: '19',
      },
      {
        id: '19',
        message: 'Is this what you wanted?',
        trigger: '20',
      },
      {
     id: '20',
     options: [
       { value: 1, label: 'Yes', trigger: '21' },
       { value: 2, label: 'No', trigger: '12' },
     ],
     },
     {
       id: '21',
       message: 'Lets call it a day for now.',
       end: true,
     },

      ]}
      />

    )
  }

}
export default Chat;
