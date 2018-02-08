import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD_LtP2Og4SDvQ_cTgnzMA7VcOeZRs0Sp4';
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch( 
            {key: API_KEY, term: 'JUL'}, 
            data => this.setState({videos: data})
        );
    }


    render () {
        return (
            <div>
                <h1>Wesh poto</h1>
                <SearchBar />
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector(".App"));