import React from 'react';
import { connect } from 'react-redux';
import { getCharacters } from 'actions/index';
import CharacterCard from 'components/charactercard/CharacterCard';
import ComicsModal from 'components/comicsModal/ComicsModal';
import './CharactersGrid.scss';

const mapStateToProps = ( state ) => {
    return {
        characters: state.charactersReducer.characters
    };
};

const mapDispatchToProos = ( dispatch ) => {
    return {
        getCharacters: () => dispatch( getCharacters() )
    };
}

class CharactersGrid extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            showComicsModal: false,
            characterIdSelected: ''
        }

        this.onCharacterCardClick = this.onCharacterCardClick.bind(this);
        this.onCloseBtnClick = this.onCloseBtnClick.bind(this);
    }

    onCharacterCardClick( characterId ) {
       this.setState( prevState => ({
           showComicsModal: !prevState.showComicsModal,
           characterIdSelected: characterId
       }));
    }

    onCloseBtnClick(){
        this.setState( prevState => ({
            showComicsModal: !prevState.showComicsModal,
        }));
    }

    componentDidMount() {
        this.props.getCharacters();
    }

    render(){
        return(
            <div className="characters-grid">
                { this.props.characters.map( character => (
                    <CharacterCard 
                        key={ character.id }
                        characterId={ character.id }
                        onCharacterCardClick={this.onCharacterCardClick}
                        characterName={ character.name} 
                        backgroundImage={`${ character.thumbnail.path}.${ character.thumbnail.extension }`}
                    />
                ))}
               { this.state.showComicsModal ? 
                    <ComicsModal 
                        onCloseBtnClick={ this.onCloseBtnClick } 
                        charactedIdSelected={this.state.characterIdSelected}
                    /> 
                    : null } 
            </div>
        )
    }
};


export default connect( mapStateToProps, mapDispatchToProos )( CharactersGrid );