import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatBot,{ Loading } from 'react-simple-chatbot';
import MoviePedia from './MoviePedia'
class Chat extends Component {

  render(){
    return (

      <ChatBot steps = {[
        {
          id: '0',
          message: 'Welcome to MoviezMadeEasy!',
          trigger: '1',
        },
        {
          id: '1',
          message: 'What is your name?',
          trigger: '2',
          },
          {
            id: '2',
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
            message: 'What can I do for you?',
            trigger: '5',
          },
          {
         id: '5',
         options: [
           { value: 1, label: 'Buy Movie Tickets', trigger: '7' },
           { value: 2, label: 'Look up movies near by', trigger: '6' },
           { value: 3, label: 'Watch movie trailers', trigger: '6' },
         ],
       },
       {
         id: '6',
         message: 'Wrong answer, try again.',
         trigger: '5',
       },
       {
         id: '7',
         message: 'Awesome! Lets start',
         trigger: '8',
       },
       {
         id: '8',
         message: 'In which city would you like to buy ticket in?',
         trigger: '9',
       },
       {
         id: '9',
         user: true,
         trigger: '10',
       },
       {
         id: '10',
         message: 'Lets buy tickets in {previousValue}',
         trigger: '11',
       },
       {
         id: '11',
         message: 'Do you know what movie you want to buy tickets for?',
         trigger: '12',
       },
       {
      id: '12',
      options: [
        { value: 1, label: 'Yes', trigger: '14' },
        { value: 2, label: 'No', trigger: '13' },
      ],
      },
      {
        id: '13',
        message: 'Not supported yet!! :(',
        trigger: '12',
      },
      {
        id: '14',
        message: 'What is the movie you want to buy ticket for?',
        trigger: '15',
      },
      {
        id: '15',
        user: true,
        trigger: '16',
      },
      {
        id: '16',
          message: 'Awesome! Lets get you those tickets!',
        trigger: '17',
      },
      {
        id: '17',
        message: 'Confirm the movie name again',
        trigger: 'search',
      },
      {
        id: 'search',
        user: true,
        trigger: '18',
      },
      {
        id: '18',
        component: <MoviePedia />,
        waitAction: true,
        trigger: '17',
      },
      ]}
      />

    )
  }

}
export default Chat;
