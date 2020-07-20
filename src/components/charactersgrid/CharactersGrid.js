import React from 'react';

import CharacterCard from 'components/charactercard/CharacterCard';
import './CharactersGrid.scss';

const CharactersGrid = () => {
    return(
        <div className="characters-grid">
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
        </div>
    )
};


export default CharactersGrid;