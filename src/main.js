import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './component/Chat.js';
import Button from './component/Button.js';
import Nav from './component/Nav.js';
import Header from './component/Header.js';
import Movie from './component/Movie.js';
import Contact from './component/Contact.js';
import Footer from './component/Footer.js';
import Event from './component/Event.js';

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
