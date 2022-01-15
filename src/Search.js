import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            search: ''
        };
        this.state = this.initialState;
    }

    handleChange = event => {
        const { value } = event.target;
        this.setState({
            search: value
        });
        this.props.handleSearch(value);
    }

    render() {
        const { search } = this.state;
        return (
            <div className="search">
                <label htmlFor="search">Search</label>
                <input type="text" name="search" id="search" value={search} onChange={this.handleChange}></input>
            </div>
        );
    }
}

export default Search;