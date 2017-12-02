import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat';
import Button from './Button';
import Nav from './Nav';
import Header from './Header';
import Movie from './Movie';
import Contact from './Contact';
import Footer from './Footer';
import Event from './Event';

class App extends React.Component {
  render () {
    return(
      <div>
        <Nav/>
        <Header/>
        <Movie/>
        <Event/>
          <Contact/>
          <Footer/>
          </div>
        )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
