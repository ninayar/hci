import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatBot,{ Loading } from 'react-simple-chatbot';
import PropTypes from 'prop-types';
import Summary from './Summary';
import { Link } from 'react-router-dom'

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
           { value: 3, label: 'Watch movie trailers', trigger: '18' },
         ],
       },

       {
         id: 'Near1',
         message:'ok',
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
        trigger: '14',
      },
      {
        id: '14',
        message : 'Do you want to see the trailer?',
        trigger: '15',
      },
      {
        id:'15',
        options: [
          { value: 1, label: 'Yes', trigger: '16' },
          { value: 2, label: 'No', trigger: '17' },
        ]
      },
      {
        id: '16',
        component: <Summary />,
        trigger: '17',
      },
      {
        id: '17',
        message: 'Cool, Is this the movie you were looking for?',
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
        component: <Summary />,
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
       message: 'Lets call it a day for now.',
       end: true,
     },
      ]}
      />

    )
  }

}
export default Chat;
