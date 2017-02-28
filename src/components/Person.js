import React, { Component, PropTypes } from 'react';
import './Person.css';

class Person extends Component {

  constructor(props) {
    super(props);

    this.state = { firstName: props.firstName, lastName: props.lastName };
    console.log(this.state);
  }

  handleClick = (e) => {
    console.log(e);
  };

  render() {
    const { firstName, lastName } = this.state;

    return (
      <div className="Person">
        <h3 title={`${firstName} ${lastName}`} onClick={this.handleClick}>{firstName} {lastName}</h3>
        <input type="text" placeholder="First Name" value={this.state.firstName} onChange={e => this.setState({ firstName: e.target.value})} />
        <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={e => this.setState({ lastName: e.target.value})} />
      </div>
    );
  }
}

Person.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

export default Person;