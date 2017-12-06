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
      date: 'error',
      data0 : {title: 'error', showtimes: { dateTime: 'error', theatre: 'error'}},
      data1 : {title: 'error', showtimes: { dateTime: 'error', theatre: 'error'}},
      data2 : {title: 'error', showtimes: { dateTime: 'error', theatre: 'error'}},
      data3 : {title: 'error', showtimes: { dateTime: 'error', theatre: 'error'}},
      data4 : {title: 'error', showtimes: { dateTime: 'error', theatre: 'error'}},

    };
  }

  componentWillMount() {
    const self = this;
    const {
      steps
    } = this.props;
    const {
      zip
    } = steps;
    const search = zip.value;
    console.log(search);
    var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
    console.log(utc);

    const nearUrl = `http://data.tmsapi.com/v1.1/movies/showings?startDate=${utc}&api_key=bdyduv2xctgvynxd79b9jfu8&zip=${search}`;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4) {
        const length = this.responseText.length;
        console.log(length);
        var data = {}
        var alldata = [];
        for (var i = 0; i < 5; i++) {
          data = JSON.parse(this.responseText)[i];
          if (data) {
            var showtimes = [];
            for (var j = 0; j < data.showtimes.length; j++) {
              showtimes.push({
                dateTime: data.showtimes[j].dateTime,
                theatre: data.showtimes[j].theatre.name
              })
            }
            data = {
              title: data.title,
              showtimes: showtimes
            }
            alldata.push(data);
          }

        }
        if (data) {
          self.setState({
            zip,
            date: utc,
            data0: alldata[0],
            data1: alldata[1],
            data2: alldata[2],
            data3: alldata[3],
            data4: alldata[4]
          });
        } else {
          self.setState({
            zip,
            date: 'n/A'
          });

        }
      }
    };
    xhttp.open("GET", nearUrl);
    xhttp.send();
  }

  render(){
    const {zip,date} = this.state;
    console.log("in render");
    var showtimes0=[];
    for(var i=0; i<this.state.data0.showtimes.length;i++)
    {
      showtimes0.push(this.state.data0.showtimes[i]);
    }
    var showtimes1=[];
    for(var i=0; i<this.state.data1.showtimes.length;i++)
    {
      showtimes1.push(this.state.data1.showtimes[i]);
    }
    var showtimes2=[];
    for(var i=0; i<this.state.data2.showtimes.length;i++)
    {
      showtimes2.push(this.state.data2.showtimes[i]);
    }
    var showtimes3=[];
    for(var i=0; i<this.state.data3.showtimes.length;i++)
    {
      showtimes3.push(this.state.data3.showtimes[i]);
    }
    var showtimes4=[];
    for(var i=0; i<this.state.data4.showtimes.length;i++)
    {
      showtimes4.push(this.state.data4.showtimes[i]);
    }
    var i=0,index=0;
    return(
      <div style={{width: '100%'} }>
        <p>
          Details: {zip.value}</p>
        <p>
          Date : {date}</p>
        <div>
          <p>Theaters: The top 5 are shown</p>
          <table className="table table-bordered">
            <thead>
              <tr>
              <th>{this.state.data0.title}</th>
              </tr>
            </thead>
            <tbody>
              { showtimes0.map((item, i) => (
              <tr key={'row0'+i}>
                <td key={'Name0'+i}>{item.theatre}</td>
                <td key={'Time0'+i}>{item.dateTime.slice(-5)}</td>
              </tr>
              )) }
            </tbody>
            <thead>
              <tr>
              <th>{this.state.data1.title}</th>
              </tr>
            </thead>
            <tbody>
              { showtimes1.map((item, index) => (
              <tr key={'row1'+index}>
                <td key={'Name1'+index}>{item.theatre}</td>
                <td key={'Time1'+index}>{item.dateTime.slice(-5)}</td>
              </tr>
              )) }
            </tbody>
            <thead>
              <tr>
              <th>{this.state.data2.title}</th>
              </tr>
            </thead>
            <tbody>
              { showtimes2.map((item, index1) => (
              <tr key={'row2'+index1}>
                <td key={'Name1'+index1}>{item.theatre}</td>
                <td key={'Time1'+index1}>{item.dateTime.slice(-5)}</td>
              </tr>
              )) }
            </tbody>
            <thead>
              <tr>
              <th>{this.state.data3.title}</th>
              </tr>
            </thead>
            <tbody>
              { showtimes3.map((item, index2) => (
              <tr key={'row3'+index2}>
                <td key={'Name1'+index2}>{item.theatre}</td>
                <td key={'Time1'+index2}>{item.dateTime.slice(-5)}</td>
              </tr>
              )) }
            </tbody>
            <thead>
              <tr>
              <th>{this.state.data4.title}</th>
              </tr>
            </thead>
            <tbody>
              { showtimes4.map((item, index3) => (
              <tr key={'row4'+index3}>
                <td key={'Name1'+index3}>{item.theatre}</td>
                <td key={'Time1'+index3}>{item.dateTime.slice(-5)}</td>
              </tr>
              )) }
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
           { value: 1, label: 'Look up Movie Details', trigger: '7' },
           { value: 2, label: 'Look up movies near by', trigger: 'Near1' },
           { value: 3, label: 'Watch movie trailers', trigger: '6' },
         ],
       },

       {
         id: 'Near1',
         component: <NearBy/>,
         trigger: 'redirect-5-0',
       },
       {
         id: 'redirect-5-0',
         message: 'have you made your choice?',
         trigger: 'redirect-5-1',
       },
       {
       id: 'redirect-5-1',
       options: [
         { value: 1, label: 'Yes', trigger: '5' },
         { value: 2, label: 'No', trigger: 'Near1' },
       ],
       },
       {
         id: '7',
         message: 'Awesome! Lets start',
         trigger: '9',
       },
       {
         id: '9',
         message: 'Do you know what movie you want to look up?',
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
        message: 'What is the movie you want to look up?',
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
