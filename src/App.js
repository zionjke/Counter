import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import Button from "./components/Button";

class App extends React.Component {

    state = {
        maxCounterValue: 5,
        minCounterValue: 0,
        counterValue: 0
    };

    incrementHandler = () => {
        this.setState({
            counterValue: this.state.counterValue + 1
        })
    };

    resetHandler = () => {
        this.setState({
            counterValue : this.state.minCounterValue
        })
    };

    render = () => {

        let incrementButtonDisabled = this.state.counterValue === this.state.maxCounterValue;
        let resetButtonDisabled = !this.state.counterValue

        return (
            <div className="App">
                <Counter state={this.state}/>
                <div className="buttons">
                    <Button buttonName="+"
                            onClick={this.incrementHandler}
                            disabled={incrementButtonDisabled}/>
                    <Button buttonName="R"
                            onClick={this.resetHandler}
                            disabled={resetButtonDisabled}/>
                </div>
            </div>
        );
    }
}

export default App;
