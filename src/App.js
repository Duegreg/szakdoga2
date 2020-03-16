import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning/FirstComponent'
import SecondComponent from './components/learning/SecondComponent'
import ThirdComponent from './components/learning/ThirdComponent'
//defaultot importálhatod, de a többit csak {}-val
import CounterButton, {Counter} from './components/counter/Counter'



class App extends Component {
  render() {
    return ( //jsx 
      <div className="App"> 
        <Counter></Counter>
      </div>
    );
  }
}


class LearningComponent extends Component {
  render() {
    return ( //jsx 
      <div className="LearningComponents">  
        My Heloo world
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

export default App;
