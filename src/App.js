import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import Settings from "./components/Settings";

class App extends React.Component {

    state = {
        maxValue: 5,
        startValue: 0,
        counter: 0
    };

    incrementHandler = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };

    resetHandler = () => {
        this.setState({
            counter: this.state.startValue
        })
    };

    changeMaxValue = (newMaxValue) => {
        this.setState({
            maxValue: newMaxValue
        })
    };

    changeStartValue = (newStartValue) => {
        this.setState({
            startValue: newStartValue
        })
    };

    setNewValue = () => {
        this.setState({
            counter: this.state.startValue
        })
    };


    render = () => {


        return (
            <div className="App">
                <Settings changeMaxValue={this.changeMaxValue}
                          changeStartValue={this.changeStartValue}
                          setNewValue={this.setNewValue}
                          state={this.state}/>
                <Counter state={this.state}
                         incrementHandler={this.incrementHandler}
                         resetHandler={this.resetHandler}/>
            </div>
        );
    }
}

export default App;
