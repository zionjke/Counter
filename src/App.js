import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import Settings from "./components/Settings";
import {connect} from "react-redux";
import {incrementAC, maxValueAC, resetAC, setValueAC, startValueAC} from "./redux/reducer";

class MyCounter extends React.Component {

    incrementHandler = () => {
        this.props.increment()
    };

    resetHandler = () => {
        this.props.reset()
    };

    changeMaxValue = (newMaxValue) => {
        this.props.maxValue(newMaxValue)
    };

    changeStartValue = (newStartValue) => {
        this.props.startValue(newStartValue)

    };

    setNewValue = () => {
        this.props.newValue()
    };


    render = () => {

        return (
            <div className="App">
                <div className='settings'>
                    <Settings changeMaxValue={this.changeMaxValue}
                              changeStartValue={this.changeStartValue}
                              setNewValue={this.setNewValue}
                              state={this.props.counter}/>
                </div>
                <div className='counter'>
                    <Counter state={this.props.counter}
                             incrementHandler={this.incrementHandler}
                             resetHandler={this.resetHandler}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            const action = incrementAC();
            dispatch(action)
        },
        reset: () => {
            const action = resetAC()
            dispatch(action)
        },
        maxValue: (newMaxValue) => {
            const action = maxValueAC(newMaxValue);
            dispatch(action)
        },
        startValue: (newStartValue) => {
            const action = startValueAC(newStartValue);
            dispatch(action)
        },
        newValue: () => {
            const action = setValueAC();
            dispatch(action)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCounter)