import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatBot,{ Loading } from 'react-simple-chatbot';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class Summary extends Component{
  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
      customerName: '',
      zip: '',
      result: 'error'

    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { movieName,customerName,zip,result} = steps;

    const search = movieName.value;
    console.log(search);
    const url = `http://www.omdbapi.com/?apikey=cc75c508&s=${search}`;
    console.log(url);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4) {
      const data = JSON.parse(this.responseText);
      console.log(data);
    }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
    this.setState({ movieName,customerName,zip,result});
  }

  render(){
    const {movieName,customerName,zip,result} = this.state;

    return(
      <div style = {{width: '100%'}}>
        <p> Details: <br/> {customerName.value} , {zip.value}</p>
        <h4>Movie Deatils</h4>
        <p>{result.value}</p>
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
      zip: ''

    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { zip } = steps;
    this.setState({zip});
  }

  render(){
    const {zip} = this.state;
    return(
      <div style = {{width: '100%'}}>
        <p> Details: {zip.value}</p>
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
        waitAction: true,
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
       { value: 1, label: 'Yes', trigger: '13' },
       { value: 2, label: 'No', trigger: '12' },
     ],
     },
      ]}
      />

    )
  }

}
export default Chat;
