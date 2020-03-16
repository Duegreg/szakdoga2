import React, { Component } from 'react'
import './Counter.css'
import PropTypes from 'prop-types'

export class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this); //ARROW!!!
    }

    increment (by) { //Update state
        this.setState( // THIS IS A MERGE
            { counter : this.state.counter + by }
        );
    }


    render() {
        return ( //jsx 
          <div className="Counter"> 
          <div></div>
          <div></div>
          <div></div>
            <CounterButton incrementMethod={this.increment}></CounterButton>
            <CounterButton by={5} incrementMethod={this.increment}></CounterButton>
            <CounterButton by={10} incrementMethod={this.increment}></CounterButton>
            <span className="count" 
                >{this.state.counter}</span>
          </div>
        );
    }
}

class CounterButton extends Component {
    //DEfine the initialstate in a construcotr, state=> 0
    constructor() {
        super();
        this.state = {
            counter : 0,
            secondCounter: 100
        }
        this.increment = this.increment.bind(this); //ARROW!!!
    }


    render = () => { //Arrow functiont nem kell bindingolni!!!
        //const style =...
        return (
            <div className="counter">
                <button onClick={this.increment} >+{this.props.by}</button>
                <button onClick={this.decrement} >-{this.props.by}</button>

            </div>
        );
    }

    //bind the method to the class for state use....
    increment () { //Update state
    this.props.incrementMethod(this.props.by); 

//        this.setState( // THIS IS A MERGE
//            { counter : this.state.counter + this.props.by }
//        );
    }

    decrement = () => { //Update state
        this.props.incrementMethod(-this.props.by); 
        }
}

CounterButton.defaultProps = {
    by : 1
}
CounterButton.propTypes = {
    by : PropTypes.number
}

export default CounterButton;