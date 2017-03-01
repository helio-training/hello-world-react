import React, { Component, PropTypes } from 'react';
import './Person.css';

class Person extends Component {

  constructor(props) {
    super(props);
  }


  handleClick = e => {
    console.log(e);
  };

  render() {

    const { firstName, lastName } = this.props.person;

    return (
      <div className="Person">
        <h3 title={`${firstName} ${lastName}`} onClick={this.handleClick}>Person.js: {firstName} {lastName}</h3>
        <input type="text" placeholder="First Name" value={firstName} onChange={e => this.props.stateChanged({firstName: e.target.value})}/>
        <input type="text" placeholder="Last Name" value={lastName} onChange={e => this.props.stateChanged({lastName: e.target.value})}/>
        <button onClick={e => this.props.stateChanged({ firstName: 'Bob', lastName: 'Saggot' })}>Name Change</button>
      </div>
    );
  }
}

export default Person;