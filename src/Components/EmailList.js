import React from "react";
import Email from "./Email";

class EmailList extends React.Component {

    constructor(props) {
        super(props);
    }

    buildEmailsList() {
        let emailList = this.props.inboxEmails.map(email => {
            return <Email
                className="email"
                email={email}
                onClickedEmail={this.props.onClickedEmail}
            />
        });

        return emailList;
    }

    render() {
        let emailList = this.buildEmailsList();
        return (
            <div>
                {emailList}
            </div>
        )
    }

}

export default EmailList;