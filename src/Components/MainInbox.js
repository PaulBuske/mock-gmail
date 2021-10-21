import Email from './Email'
import ComposeNewEmail from './ComposeNewEmailButton'
import React from "react";
import SearchBar from "./SearchBar";
import EmailList from "./EmailList";
import ComposeNewEmailButton from "./ComposeNewEmailButton";

class MainInbox extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <div>
                    <ComposeNewEmailButton onComposeButtonClicked={this.props.onComposeButtonClicked}/>
                    <SearchBar/>
                </div>
                <EmailList inboxEmails={this.props.inboxEmails} onClickedEmail={this.props.onClickedEmail}/>
            </div>
        )
    }
}


export default MainInbox;
