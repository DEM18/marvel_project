import React from 'react';

import Header from 'components/header/Header';
import CharactersGrid from 'components/charactersgrid/CharactersGrid';
import ComicCard from 'components/comiccard/ComicCard';
import ComicsModal from 'components/comicsModal/ComicsModal';

class App extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <ComicsModal/>
            </div>
        )
    }
}
export default App;