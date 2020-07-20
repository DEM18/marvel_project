import React from 'react';

import Header from 'components/header/Header';
import CharacterCard from 'components/characterCard/CharacterCard';

class App extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <CharacterCard/>
            </div>
        )
    }
}
export default App;