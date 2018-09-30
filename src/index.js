import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA_EeLIKEwEdw0RKU8ap5ZH2ZRF2g8xp2k';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>);
}

ReactDom.render(<App />, document.querySelector('.container'));