import React from 'react';
import Button from "./Button";
import styles from './Counter.module.css'


class Counter extends React.Component {

    render = () => {

        let spanClass = this.props.state.counter === this.props.state.maxValue ? "red_status" : "";
        let incrementButtonDisabled = this.props.state.counter === this.props.state.maxValue;
        let resetButtonDisabled = this.props.state.counter === this.props.state.startValue;
        let counterValue = (this.props.state.startValue < 0) || (this.props.state.maxValue < 0) ? "Incorrect Value" : this.props.state.counter;

        return (
            <div className={styles.counterBlock}>
                <div className={styles.counter}>
            <span className={spanClass}>
                {counterValue}
            </span>
                </div>
                <div className={styles.buttons}>
                    <Button buttonName="+"
                            onClick={this.props.incrementHandler}
                            disabled={incrementButtonDisabled}
                            className={styles.button}/>
                    <Button buttonName="R"
                            onClick={this.props.resetHandler}
                            disabled={resetButtonDisabled}
                            className={styles.button}/>
                </div>
            </div>

        );
    }
};

export default Counter;
