import React from 'react';

import Header from 'components/header/Header';
import CharactersGrid from 'components/charactersgrid/CharactersGrid';
import ComicCard from 'components/comiccard/ComicCard';
class App extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <ComicCard/>
            </div>
        )
    }
}
export default App;