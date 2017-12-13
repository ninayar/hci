import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatBot,{ Loading } from 'react-simple-chatbot';
import PropTypes from 'prop-types';
import Trailer from './Trailer';
import {fetchJsonp} from 'fetch-jsonp';

export class Summary extends Component{
  constructor(props) {
    super(props);
    this.state = {
      movieName: props.movieName,
      customerName: props.customerName,
      zip: props.zip,
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
    var search = '';
    const { steps } = this.props;
    if(typeof(steps) != 'undefined'){
      const { movieName,customerName,zip } = steps;
      console.log("here")
      search = movieName.value;
    }
    else{
      console.log("no i am here")
      search = this.state.movieName;
      }
    console.log(search);
    const url = `http://www.omdbapi.com/?apikey=cc75c508&t=${search}`;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4) {
      const data = JSON.parse(this.responseText);
      if (data.Response=="True") {
        self.setState({result: "True", Title: data.Title,  Actors: data.Actors,
              Plot: data.Plot,Poster: data.Poster,Imdb: data.imdbRating,Released: data.Released});
      }
      else{
        self.setState({ result: 'Not Found',
              Title: 'Not Found',  Actors: 'Not Found',
              Plot: 'Not Found',Poster: 'Not Found',Imdb: 'Not Found',Released: 'Not Found'});
      }
    }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
    this.setState(self);
  }

  render(){
    const {movieName,customerName,zip,result,Title,Actors,Plot,Poster,Imdb,Released} = this.state;
    return(
      <div style={{width: '100%'} }>
        <h4>Movie Deatils</h4>
       { result=='True' ?

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
      date: 'loading',
      data0 : {title: 'loading', showtimes: { dateTime: 'loading', theatre: 'loading'}},
      data1 : {title: 'loading', showtimes: { dateTime: 'loading', theatre: 'loading'}},
      data2 : {title: 'loading', showtimes: { dateTime: 'loading', theatre: 'loading'}},
      data3 : {title: 'loading', showtimes: { dateTime: 'loading', theatre: 'loading'}},
      data4 : {title: 'loading', showtimes: { dateTime: 'loading', theatre: 'loading'}},

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
    const nearUrl = `http://data.tmsapi.com/v1.1/movies/showings?startDate=${utc}&api_key=bdyduv2xctgvynxd79b9jfu8&zip=${search}`;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4) {
        const length = this.responseText.length;
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

class BuyTicket extends Component{
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: '',
      zip: '',
      theatre: '',
      customerName: '',
      result: 'error',
    };
  }

  componentWillMount() {
    const self=this;
    const { steps } = this.props;
    const { movieTitle,zip,theatre,customerName } = steps;
    this.setState({ movieTitle,zip,theatre,customerName });
  }

  render(){
    const {movieTitle,zip,theatre,customerName} = this.state;
    return(
      <div>
        <h4>Ticket Deatils</h4>
        <p>Customer: {customerName.value}<br/>Zip: {zip.value}</p>
        <p> Movie: {movieTitle.value} <br/> Theater: {theatre.value} </p>
        <p>We wanted to help you buy it. But, no api is for free that supports this feature</p>

        <p>Check out:</p>
        <ul className="list-group">
          <li className="list-group-item"><a href="https://www.moviefone.com/showtimes/"  target="_blank">MovieFone</a></li>
          <li className="list-group-item"><a href="https://www.movietickets.com/"  target="_blank">MovieTieckets</a></li>
          <li className="list-group-item"><a href="https://www.fandango.com/?cmp=KNC_SP_Google_Main_Gen-Top-Volume-Ticket-Keywords-ABM&refcd=43700025389633112_%7cpkw%7c%2Bbuy+%2Bmovie+%2Btickets_matchtypeb&gclid=CjwKCAiAx57RBRBkEiwA8yZdUGlTnqY-Zza1VrPsv3E9hL3Damu50tNACNRoTAwN1jFgi8faoXUKCxoC40wQAvD_BwE&gclsrc=aw.ds"
           target="_blank">Fandago</a></li>
          <li className="list-group-item"><a href="https://www.atomtickets.com/"  target="_blank">Atom</a></li>
        </ul>
    </div>
    );
  }
}

BuyTicket.propTypes = {
  steps: PropTypes.object,
};

BuyTicket.defaultProps = {
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
           { value: 3, label: 'Watch movie trailers', trigger: '18' },
           { value: 4, label: 'Buy Tickets', trigger: '23' },
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
         message: 'Do you know what movie you want to  look up?',
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
        message: 'Lets go back to the options so that you can decide.',
        trigger: '6',
      },
      {
        id: '12',
        message: 'What is the movie you want to look up??',
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
        trigger: '17',
      },
      {
        id: '17',
        message: 'Is this the movie you were looking for?',
        trigger: '20',
      },
      {
        id:'18',
        message: 'Please specify the Movie name',
        trigger: 'trailerName'
      },
      {
        id: 'trailerName',
        user: true,
        trigger: '19'
      },
      {
        id: '19',
        component: <Trailer />,
        trigger:'21'
      },
      {
         id: '20',
         options: [
           { value: 1, label: 'Yes', trigger: '22' },
           { value: 2, label: 'No', trigger: '12' },
         ],
     },
     {
       id : '21',
       message: 'What else Can I do for you?',
       trigger: '6'
     },
     {
       id: '22',
       message: 'Lets go back to the menu options',
       trigger: '6',
     },
     {
       id: '23',
       message: 'Lets help buy you those tickets.',
       trigger: 'info',
     },
     {
       id: 'info',
       message: 'First look up details of the movie you want to see and check the near by shows.',
       trigger: '24',
     },
     {
       id: '24',
       message: 'What is the movie you want to look up?',
       trigger: 'movieTitle',
     },
     {
       id: 'movieTitle',
       user: true,
       trigger: 'theatre-question',
     },
     {
       id: 'theatre-question',
       message: 'What is the theater you want to buy the ticket in?',
       trigger: 'theatre',
     },
     {
       id: 'theatre',
       user: true,
       trigger: '25',
     },
     {
       id: '25',
       component: <BuyTicket />,
       trigger: '26',
     },
     {
       id: '26',
       message: 'Is this what you wanted?',
       trigger: '27',
     },
     {
      id: '27',
      options: [
        { value: 1, label: 'Yes', trigger: '28' },
        { value: 2, label: 'No', trigger: '6' },
        ],
    },
    {
      id: '28',
      message: 'Thats all folks. Signing out.',
      end: true,
    }
  ]}
  />
  )
}
}
export default Chat;
