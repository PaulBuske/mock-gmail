import React from "react";

class Email extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div
                onClick={
                    (e) =>{
                    this.props.onClickedEmail(this.props.email)
                    }
                }
            >
                From: {this.props.email.sender}<br/>
                Date: {this.props.email.date}<br/>
                Subject: {this.props.email.subject}<br/>
                <br/>
            </div>
        </div>
    }
}


export default Email;