import React from 'react';

import './CharacterCard.scss';


const CharacterCard = () => {
    return (
        <div className="character-card">
            <i className="far fa-star character-card"></i>
            <span className="character-card__character-name">Spiderman</span>
        </div>
    )
};

export default CharacterCard;

//<i className="character-card far fa-star "></i>
// <img className="character-card__character-image" src={`${spiderManImage}`} alt="characterName"/>