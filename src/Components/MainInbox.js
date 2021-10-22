import Email from './Email'
import ComposeNewEmail from './ComposeNewEmailButton'
import React from "react";
import EmailList from "./EmailList";
import ComposeNewEmailButton from "./ComposeNewEmailButton";
import "./Styles/MainInbox.css"

class MainInbox extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={"main-background"}>

                <div >
                    Welcome to the Thunderdome!
                    <br/>
                    <br/>
                    <ComposeNewEmailButton onComposeButtonClicked={this.props.onComposeButtonClicked}/>
                    <form onSubmit={(event) => this.props.onSearchEmailButton(event)}>
                        <input type={"text"} name={"query"} placeholder={"I am case sensitive"}/>
                        <input type={"submit"}/>
                    </form>
                </div>
                <EmailList id={"email-list"} inboxEmails={this.props.inboxEmails} onClickedEmail={this.props.onClickedEmail}/>
            </div>
        )
    }
}


export default MainInbox;
