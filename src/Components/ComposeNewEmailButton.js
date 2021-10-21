import React from "react";

class ComposeNewEmailButton extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={() => this.props.onComposeButtonClicked()}>New Email</button>
            )
    }
}

export default ComposeNewEmailButton;