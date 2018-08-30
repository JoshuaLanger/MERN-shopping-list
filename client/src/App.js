import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import AppNavbar from './components/AppNavbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <h1>Heidy ho!</h1>
      </div>
    );
  }
}

export default App;
