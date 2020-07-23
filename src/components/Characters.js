import React from 'react';
import { connect } from 'react-redux';
import { getCharacters, getCharactersByName, addFavoriteCharacter } from 'actions/index';
import CardsGrid from 'components/cardsgrid/CardsGrid';
import ComicsModal from 'components/comicsModal/ComicsModal';
import './Characters.scss';


const mapStateToProps = ( state ) => {
    return {
        characters: state.charactersReducer.characters,
        favoriteCharacters: state.charactersReducer.favoriteCharacters
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        getCharacters: () => dispatch( getCharacters() ),
        getCharactersByName: characterName => dispatch( getCharactersByName( characterName )),
        addFavoriteCharacter: characterId => dispatch( addFavoriteCharacter( characterId ))
    };
}

class Characters extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            showComicsModal: false,
            characterIdSelected: ''
        }

        this.onCharacterCardClick = this.onCharacterCardClick.bind(this);
        this.onCloseBtnClick = this.onCloseBtnClick.bind(this);
        this.onFavoriteBtnClick = this.onFavoriteBtnClick.bind(this);
    }

    onCharacterCardClick( characterId ) {
       this.setState( prevState => ({
           showComicsModal: !prevState.showComicsModal,
           characterIdSelected: characterId
       }));
    }

    onFavoriteBtnClick( characterId ) {
        
        this.props.addFavoriteCharacter( characterId );

    }
 
    onCloseBtnClick(){
        this.setState( prevState => ({
            showComicsModal: !prevState.showComicsModal,
        }));
    }

    componentDidMount() {
        this.props.getCharacters();
    }

    render() {
        return(
            <div className="characters"> 
                <CardsGrid 
                    characters={this.props.characters}
                    onCharacterCardClick={ this.onCharacterCardClick }
                    onFavoriteBtnClick={ this.onFavoriteBtnClick }
                />
                { this.state.showComicsModal ? 
                    <ComicsModal 
                        onCloseBtnClick={ this.onCloseBtnClick } 
                        charactedIdSelected={this.state.characterIdSelected}
                     /> 
                    : null } 
            </div>
        )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Characters );