import React, { Component, StrictMode } from 'react';
import Leaflet from 'leaflet';
import logo from './logo.svg';
import './App.css';
import SimpleExample from './Simple';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StrictMode>
          <SimpleExample />
        </StrictMode>
      </div>
    );
  }
}

export default App;
