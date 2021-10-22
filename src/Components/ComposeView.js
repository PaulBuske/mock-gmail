import React from "react";

class ComposeView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={(event) => this.props.onSendButtonClick(event)} >

                To: <br/>
                <input type="text" name={"recipient"}/><br/>
                Subject: <br/>
                <input type="text" name={"subject"}/><br/>
                Message:<br/>
                <input type="text" name={"message"}/> <br/>
                <input type={"submit"} value={"send"}/>
                <button id={"cancel-button"} onClick={this.props.onReturnButtonClick}>Cancel</button>
            </form>

        )
    }
}

export default ComposeView;