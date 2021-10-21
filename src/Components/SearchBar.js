import React from "react";
import ReactDOM from "react-dom";


class SearchBar extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="search-bar">
                <input type="text"/>
            </form>
        )
    }
}

export default SearchBar;