import React from 'react';
import Button from "./Button";
import styles from './Counter.module.css'


class Counter extends React.Component {

    render = () => {

        let spanClass = this.props.state.counter === this.props.state.maxValue ? "red_value" : "";
        // let incrementButtonDisabled = this.props.state.counter === this.props.state.maxValue;
        // let resetButtonDisabled = this.props.state.counter === this.props.state.startValue;


        return (
            <div className={styles.counterBlock}>
                <div className={styles.counter}>
            <span className={spanClass}>
                {this.props.state.counter}
            </span>
                </div>
                <div className={styles.buttons}>
                    <Button buttonName="+"
                            onClick={this.props.incrementHandler}
                            disabled={this.props.state.incButtonDisabled}
                            className={styles.button}/>
                    <Button buttonName="R"
                            onClick={this.props.resetHandler}
                            disabled={this.props.state.resetButtonDisabled}
                            className={styles.button}/>
                </div>
            </div>

        );
    }
};

export default Counter;
