import React from 'react';

import './CardsGrid.scss';
import CharacterCard from 'components/charactercard/CharacterCard';

const CardsGrid = ( props ) => {
    const { characters, onCharacterCardClick, onFavoriteBtnClick } = props;
    return(
        <div className="characters-grid">
            { characters.map( character => (
                <CharacterCard 
                    key={ character.id }
                    characterId={ character.id }
                    onCharacterCardClick={ onCharacterCardClick }
                    onFavoriteBtnClick={ onFavoriteBtnClick }
                    characterName={ character.name} 
                    backgroundImage={`${ character.thumbnail.path}.${ character.thumbnail.extension }`}
                />
            ))}
        </div>
    )
}

export default CardsGrid;



