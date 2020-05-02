import React from 'react';
import styles from './Settings.module.css'
import Input from "./Input";
import Button from "./Button";


class Settings extends React.Component {

    state = {
        maxCounterValue: 0,
        minCounterValue: 0
    }

    maxValueChanged = (e) => {
        this.setState({
            maxCounterValue: e.currentTarget.valueAsNumber
        })
    };

    minValueChanged = (e) => {
        this.setState({
            minCounterValue: e.currentTarget.valueAsNumber
        })
    };

    setNewValue = () => {
        this.props.changeValue(this.state.maxCounterValue, this.state.minCounterValue)
    }

    render = () => {

        return (
            <div className={styles.settings}>
                <div className={styles.inputsBlock}>
                    <div className={styles.inputBlock}>
                        <span className={styles.inputName}>max value: </span>
                        <Input className={styles.input}
                               type="number"
                               value={this.state.maxCounterValue}
                               onChange={this.maxValueChanged}/>
                    </div>
                    <div className={styles.inputBlock}>
                        <span className={styles.inputName}>start value: </span>
                        <Input className={styles.input}
                               type="number"
                               value={this.state.minCounterValue}
                               onChange={this.minValueChanged}/>
                    </div>
                </div>
                <div className={styles.buttonBlock}>
                    <Button className={styles.button}
                            onClick={this.setNewValue}
                            buttonName="Set"/>
                </div>

            </div>

        );
    }
};

export default Settings;
