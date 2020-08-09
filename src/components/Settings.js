import React from 'react';
import styles from './Settings.module.css'
import Input from "./Input";
import Button from "./Button";


class Settings extends React.Component {


    maxValue = (e) => {
        this.props.changeMaxValue(e.currentTarget.valueAsNumber)
    };

    minValue = (e) => {
     this.props.changeStartValue(e.currentTarget.valueAsNumber)
    };


    render = () => {

        let classForInput =  this.props.state.counter === "error" && styles.errorInput

        return (
            <div className={styles.container}>
                    <div className={styles.display}>
                            <span>max value: </span>
                            <Input className={classForInput}
                                   type="number"
                                   value={this.props.state.maxValue}
                                   onChange={this.maxValue}/>

                            <span>start value: </span>
                            <Input className={classForInput}
                                   type="number"
                                   value={this.props.state.startValue}
                                   onChange={this.minValue}/>
                    </div>
                <div className={styles.buttonBlock}>
                    <Button className={styles.button}
                            onClick={this.props.setNewValue}
                            buttonName="Set"
                            disabled={this.props.state.setButtonDisabled}/>
                </div>

            </div>

        );
    }
};

export default Settings;
