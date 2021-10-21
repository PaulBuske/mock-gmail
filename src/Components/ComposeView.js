import React from "react";

class ComposeView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>

                <input type="text" name={"recipient"}/>
                <input type="text" name={"subject"}/>
                <input type="text" name={"message"}/>

                //TODO Get this to pass into the send function
                <input type={"submit"} value={"send"} onClick={(e) => {
                    this.props.onSendButtonClick({
                        sender: "Elliott and Paul",
                        recipient: e.target.recipient.value,
                        subject: e.target.subject.value,
                        message: e.target.message.value
                    })
                }}/>
                <button onClick={this.props.onReturnButtonClick}>Cancel</button>
            </form>

        )
    }
}

export default ComposeView;