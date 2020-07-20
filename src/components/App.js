import React from 'react';

import Header from 'components/header/Header';
import CharactersGrid from 'components/charactersgrid/CharactersGrid';
class App extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <CharactersGrid/>
            </div>
        )
    }
}
export default App;