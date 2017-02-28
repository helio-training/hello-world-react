import React, { Component, PropTypes } from 'react';
import './Person.css';

class Person extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { firstName, lastName } = this.props;

    return (
      <div className="Person">
        <h3>{firstName} {lastName}</h3>
      </div>
    );
  }
}

Person.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

export default Person;