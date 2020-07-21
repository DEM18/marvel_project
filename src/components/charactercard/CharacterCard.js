import React from 'react';

import './CharacterCard.scss';


class CharacterCard extends React.Component {
    constructor( props ){
        super( props );

        this.handleCharacterCardClick = this.handleCharacterCardClick.bind(this);
    }

    handleCharacterCardClick() {
        let characterId =  this.props.characterId;
        this.props.onCharacterCardClick( characterId );
    }


    render() {
        const { backgroundImage, characterName } = this.props;
        return (
            <div className="character-card"
                onClick={ this.handleCharacterCardClick }
                >
                <img className="character-card__image"
                    src={`${backgroundImage}`}
                    alt={`${characterName}`}/>
                <i className="far fa-star character-card"></i>
                <span className="character-card__character-name">{ characterName }</span>
             </div>
        );
    }
};

export default CharacterCard;
