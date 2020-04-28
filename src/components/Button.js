import React from 'react';

class Button extends React.Component {

    render = () => {

        return (
            <button onClick={this.props.onClickButton} className="button" disabled={this.props.buttonStatus}>
                {this.props.buttonName}
            </button>
        );
    }
};

export default Button;
