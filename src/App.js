import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import Button from "./components/Button";

class App extends React.Component {

    state = {
        counterValue: 0,
        maxCounterValue: 5,
        minCounterValue: 0
    };

    incrementHandler = () => {
        this.setState({
            counterValue: this.state.counterValue + 1
        })
    };

    resetHandler = () => {
        this.setState({
            counterValue: this.state.minCounterValue
        })
    };

    render = () => {

        return (
            <div className="App">
                <Counter state={this.state}/>
                <div className="buttons">
                    <Button buttonName="+"
                            onClickButton={this.incrementHandler}
                            buttonStatus={this.state.counterValue === this.state.maxCounterValue}/>
                    <Button buttonName="R"
                            onClickButton={this.resetHandler}
                            buttonStatus={this.state.counterValue === this.state.minCounterValue }/>
                </div>
            </div>
        );
    }
}

export default App;
