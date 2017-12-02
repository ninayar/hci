import React from 'react';

class Event extends React.Component {

  render() {
    return(
    <section id="event" className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2>Upcoming Events</h2>
            <p className="lead">Here are some of the upcoming movies</p>
          </div>
        </div>
      </div>
    </section>
    );
  }

}

export default Event;
