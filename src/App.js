import logo from './logo.svg';
import './App.css';
import MainInbox from './Components/MainInbox';
import React from "react";
import ComposeView from "./Components/ComposeView";
import DetailedView from "./Components/DetailedView";
import {isCompositeComponent} from "react-dom/test-utils";


class App extends React.Component {

    async getEmails() {
        let url = "http://localhost:3001/emails"
        const response = await fetch(url);
        const JSONResponse = await response.json();
        this.setState({inboxEmails: JSONResponse});
    }

    async sendEmails(email){
        this.setState({sentEmail: email})
        let url = "http://localhost:3001/send"
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(email)
        });

        return response.json();

    }

    componentDidMount() {
        this.getEmails();
    }


    handleClickedEmail(email) {
        this.setState({currentEmail: email})
    }

    handleReturnToInboxButton() {
        this.setState({isEmailClicked: false});
        this.setState({currentEmail: {}})
    }

    handleComposedButtonClicked() {
        this.setState({isComposingEmail: true});
    }

    handleSendButtonClick(email){
        this.sendEmails(email);
    }

    //TODO create a search method that will search emails found inside of inbox by subject

    //Create a found email view
    //The filtered view should mirror the list of emails in the main view
    //Make the filtered view able to return to the inbox
    constructor(props) {
        super(props);
        this.state = {
            inboxEmails: [],
            currentEmail: {},
            isComposingEmail: false,
            sentEmail: {}

        }
    }


    renderPage() {
        console.log(this.state.isComposingEmail)
        if (this.state.isComposingEmail === false && !this.state.currentEmail.message) {
            console.log(this.state.sentEmail)
            return <MainInbox
                className="main-inbox"
                inboxEmails={this.state.inboxEmails}
                onClickedEmail={(email) => this.handleClickedEmail(email)}
                onComposeButtonClicked={() => this.handleComposedButtonClicked()}
            />
        }
        if (this.state.isComposingEmail === true) {
            return <ComposeView
            className={"compose-new-email-view"}
            onReturnButtonClick={() => this.handleReturnToInboxButton()}
            onSendButtonClick={(email) => this.handleSendButtonClick(email)}
            />
        }
        if (this.state.currentEmail) {
            return <DetailedView
                className={"detailed-view"}
                currentEmail={this.state.currentEmail}
                onReturnButtonClick={() => this.handleReturnToInboxButton()}
            />
        }
    }

    render() {
        return (
            <div>
                {this.renderPage()}
            </div>
        )
    }
}

export default App;
