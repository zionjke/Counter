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

    changeValue = (maxvalue,startvalue) => {
        this.setState({
            maxValue: maxvalue,
            startValue:startvalue,
            counter:startvalue
        })
    }

    render = () => {


        return (
            <div className="App">
                <Settings changeValue={this.changeValue}/>
                <Counter state={this.state}
                         incrementHandler={this.incrementHandler}
                         resetHandler={this.resetHandler}/>
            </div>
        );
    }
}

export default App;
