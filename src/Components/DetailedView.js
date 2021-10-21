import React from "react";

class DetailedView extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                From: {this.props.currentEmail.sender}<br/>
                Date: {this.props.currentEmail.date}<br/>
                Subject: {this.props.currentEmail.subject}<br/>
                Message:<br/>{this.props.currentEmail.message}<br/>
                <button onClick={this.props.onReturnButtonClick}>Return to Inbox</button>
            </div>
        )
    }
}

export default DetailedView;