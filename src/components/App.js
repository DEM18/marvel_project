import React from 'react';

import Header from 'components/header/Header';
import CharactersGrid from 'components/charactersgrid/CharactersGrid';
import ComicCard from 'components/comiccard/ComicCard';
import ComicsModal from 'components/comicsModal/ComicsModal';
import ComicCardDetail from 'components/comiccarddetail/ComicCardDetail';

class App extends React.Component {
    render() {
        return(
            <div>
                <Header/>
               <ComicCardDetail/>
            </div>
        )
    }
}
export default App;