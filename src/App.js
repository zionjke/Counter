import React from 'react';
import './App.css';

class Counter extends React.Component {

    state = {
        counterValue: 0,
        maxCounterValue:5,
        minCounterValue:0
    };

    incrementHandler = () => {
        this.setState({
            counterValue:this.state.counterValue + 1
        })
    };

    decrementHandler = () => {
        this.setState({
            counterValue:this.state.counterValue - 1
        })
    };


  render = () => {

      let spanClass = this.state.counterValue === this.state.maxCounterValue ? "red_value" : "";
      let incButtonState = this.state.counterValue === this.state.maxCounterValue ? true : false;
      let decrButtonState = this.state.counterValue === this.state.minCounterValue ? true : false;

    return (
        <div className="App">
          <div className="counter">
            <span className={spanClass}>
                {this.state.counterValue}
            </span>
          </div>
            <div className="buttons">
                <button onClick={this.incrementHandler} className="button" disabled={incButtonState}>
                    +
                </button>
                <button onClick={this.decrementHandler} className="button" disabled={decrButtonState}>
                    -
                </button>
            </div>
        </div>
    );
  }
}

export default Counter;
