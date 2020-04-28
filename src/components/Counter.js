import React from 'react';


class Counter extends React.Component {

    render = () => {

        let spanClass = this.props.state.counterValue === this.props.state.maxCounterValue ? "red_status" : "";

        return (
            <div className="counter">
            <span className={spanClass}>
                {this.props.state.counterValue}
            </span>
            </div>
        );
    }
};

export default Counter;
