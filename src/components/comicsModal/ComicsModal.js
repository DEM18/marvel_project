import React from 'react';
import { connect } from 'react-redux';
import { getComicsByCharacter } from 'actions/index';

import './ComicsModal.scss';
import ComicCard from 'components/comiccard/ComicCard';

const mapStateToProps = ( state ) => {
    return {
        comicsByCharacter: state.charactersReducer.comicsbyCharacter,
        characters: state.charactersReducer.characters
    };
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        getCharacterComics: characterId => dispatch( getComicsByCharacter( characterId ) )
    };
}


class ComicsModal extends React.Component {

    componentDidMount() {
        this.props.getCharacterComics( this.props.charactedIdSelected );
    }

    render() {
        const { onCloseBtnClick } = this.props;
        let characterName = ( this.props.characters.find( character => character.id === parseInt( this.props.charactedIdSelected ))).name;
        return( 
            <div className="comics-modal-wrapper">
                        <div className="comics-modal">
                            <div className="comics-modal__btn-close-box">
                                <button className="comics-modal__btn-close"
                                    onClick={ onCloseBtnClick }>
                                    X
                                </button>
                            </div>
                            <div className="comics-modal__title">
                               { characterName }
                            </div>
                            <div className="comics-modal__comics-list">
                                <div className="comics-modal__comic">
                                    { this.props.comicsByCharacter.map( comic => {
                                        return(
                                            <ComicCard
                                                key={ comic.id}
                                                comicId={ comic.id }
                                                title={ comic.title } 
                                                description={ comic.description }
                                                image={ `${comic.thumbnail.path}.${comic.thumbnail.extension}` } 
                                            />
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
};

export default connect( mapStateToProps, mapDispatchToProps )( ComicsModal );

