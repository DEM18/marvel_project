import React from 'react';

import './CharacterCard.scss';


const CharacterCard = ( props ) => {
    const { onCharacterCardClick } = props;
    return (
        <div className="character-card"
            onClick={ onCharacterCardClick }>
            <i className="far fa-star character-card"></i>
            <span className="character-card__character-name">Spiderman</span>
         </div>
    );
};

export default CharacterCard;
