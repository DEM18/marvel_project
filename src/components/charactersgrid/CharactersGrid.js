import React from 'react';

import CharacterCard from 'components/charactercard/CharacterCard';
import ComicsModal from 'components/comicsModal/ComicsModal';
import './CharactersGrid.scss';

class CharactersGrid extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            showComicsModal: false
        }

        this.onCharacterCardClick = this.onCharacterCardClick.bind(this);
        this.onCloseBtnClick = this.onCloseBtnClick.bind(this);
    }

    onCharacterCardClick() {
       this.setState( prevState => ({
           showComicsModal: !prevState.showComicsModal
       }));
    }

    onCloseBtnClick(){
        this.setState( prevState => ({
            showComicsModal: !prevState.showComicsModal
        }));
    }

    render(){
        return(
            <div className="characters-grid">
                <CharacterCard onCharacterCardClick={this.onCharacterCardClick} />
               { this.state.showComicsModal ? <ComicsModal onCloseBtnClick={ this.onCloseBtnClick } /> : null } 
            </div>
        )
    }
};


export default CharactersGrid;