import React from 'react';

class Header extends React.Component {


  render() {
    return (
      <div>
      <header className="bg-info text-white">
        <div className="container text-center">
          <h1>Welcome to MovieTix</h1>
          <p className="lead">Your One Stop Destination for Movies</p>
        </div>
      </header>
      </div>
    );
  }

}

export default Header;
