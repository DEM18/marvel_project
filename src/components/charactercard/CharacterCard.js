import React from 'react';

import './CharacterCard.scss';


class CharacterCard extends React.Component {
    constructor( props ){
        super( props );

        this.state = {
            showRegularFontIcon: true
        }

        this.handleCharacterCardClick = this.handleCharacterCardClick.bind(this);
        this.handleFavoriteBtnClick = this.handleFavoriteBtnClick.bind(this);
    }

    render() {
        const { backgroundImage, characterName } = this.props;
        return (
            <div className="character-card">
                <div className="character-card__image-box"
                    onClick={ this.handleCharacterCardClick }>
                    <img className="character-card__image"
                        src={`${backgroundImage}`}
                        alt={`${characterName}`}
                    />
                </div>
                <button className="character-card__btn-favorite"
                    onClick={this.handleFavoriteBtnClick}>
                    <i className={`${this.state.showRegularFontIcon ? `far` : `fas`} fa-star character-card`}></i>
                </button>
                <span className="character-card__character-name">{ characterName }</span>
            </div>
        );
    }

    handleCharacterCardClick() {
        let characterId =  this.props.characterId;
        this.props.onCharacterCardClick( characterId );
    }

    handleFavoriteBtnClick() {
       let characterId =  this.props.characterId;
        this.setState( prevState => ({
            showRegularFontIcon: !prevState.showRegularFontIcon
        }));

       this.props.onFavoriteBtnClick( characterId );
    }
};

export default CharacterCard;
