import './App.css';
import MainInbox from './Components/MainInbox';
import React from "react";
import ComposeView from "./Components/ComposeView";
import DetailedView from "./Components/DetailedView";


class App extends React.Component {

    async getEmails() {
        let url = "http://localhost:3001/emails"
        const response = await fetch(url);
        const JSONResponse = await response.json();
        this.setState({inboxEmails: JSONResponse});
    }

    async getSearchedResults(event) {
        console.log("I am the search query: " + event.target.query.value)
        let url = "http://localhost:3001/search?query=" + event.target.query.value;
        const response = await fetch(url);
        const JSONResponse = await response.json();
        this.setState({inboxEmails: JSONResponse});
    }

    async sendEmails(event){
        const parsedEmail ={
            sender: "PaulyG",
            recipient: event.target.recipient.value,
            subject: event.target.subject.value,
            message: event.target.message.value
        }

        this.setState({sentEmail: event})
        let url = "http://localhost:3001/send"
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(parsedEmail)
        });
        const jsonResponse =  await response.json();
        return jsonResponse;
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

    handleSendButtonClick(event){
        this.sendEmails(event);
    }


    handleSearchEmailButtonClicked(event) {
        event.preventDefault();
        this.getSearchedResults(event);

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
            sentEmail: {},
            query: ''
        }
    }


    renderPage() {

        if (this.state.isComposingEmail === false && !this.state.currentEmail.message) {
            return <MainInbox

                className="main-inbox"
                inboxEmails={this.state.inboxEmails}
                onClickedEmail={(email) => this.handleClickedEmail(email)}
                onComposeButtonClicked={() => this.handleComposedButtonClicked()}
                onSearchEmailButton={(event) => this.handleSearchEmailButtonClicked(event)}
            />
        }
        if (this.state.isComposingEmail === true) {
            return <ComposeView
            className={"compose-new-email-view"}
            onReturnButtonClick={() => this.handleReturnToInboxButton()}
            onSendButtonClick={(event) => this.handleSendButtonClick(event)}
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
