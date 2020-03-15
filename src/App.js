import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent, { SecondComponent } from './components/learning/FirstComponent'
//defaultot importálhatod, de a többit csak {}-val

class App extends Component {
  render() {
    return ( //jsx 
      <div className="App">  
        My Heloo world
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}


function ThirdComponent() {
    return (
      <div className="thirdComponent">  
        Third Component
      </div>
    );
}


export default App;
