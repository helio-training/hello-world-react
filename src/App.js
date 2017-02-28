import React, { Component } from 'react';
import Person from './components/Person';
import './App.css';

const greet = () => "Hello World";
//
// export default () => <h1>{greet()}</h1>;


class App extends Component {

  render() {

    return (
      <div>
        <h1>{greet()}</h1>
        <Person firstName="Tyler" lastName="Garlick" />
      </div>
    );
  }

}

export default App;
