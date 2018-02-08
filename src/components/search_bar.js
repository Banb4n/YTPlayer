import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term:'Github' };
    }

    render() { 
        return ( 
            <div>
                <input 
                    value={this.state.term}
                    onChange={e => this.setState({ term: e.target.value })}
                />
            </div>
         );
    }
}
 
export default SearchBar;