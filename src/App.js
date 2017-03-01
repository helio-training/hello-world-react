import React, { Component } from 'react';
import Person from './components/Person';
import './App.css';

const greet = () => "Hello World";
//
// export default () => <h1>{greet()}</h1>;


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { firstName: 'Donald', lastName: 'Trump' };
  }

  handleChange = person => {
    this.setState(person);
  };

  render() {
    const elPresidente = this.state;
    console.log(this.state);

    return (
      <div className="App">
        <h1>App.js: {elPresidente.firstName} {elPresidente.lastName}</h1>
        <button onClick={e => this.setState({ firstName: 'Valdamir', lastName:'Putin'})}>Alternate Facts</button>
        <Person person={elPresidente} stateChanged={this.handleChange}/>
      </div>
    );
  }

}

export default App;
