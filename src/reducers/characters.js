import { CHARACTERS_LOADED, COMICS_LOADED, COMIC_LOADED, CHARACTERS_FILTERED_LOADED } from 'actions/constants';

const initialState = {
    characters: [],
    comicsbyCharacter: [],
    comicById: []
};

export function charactersReducer( state = initialState, action ) {
    switch( action.type ) {
        case CHARACTERS_LOADED:
            return {
                ...state,
                characters: [
                    ...state.characters, 
                    ...action.payload
                ]
            };
        case COMICS_LOADED: 
            return {
                ...state,
                comicsbyCharacter: [
                    ...action.payload
            ]
        };
        case COMIC_LOADED: 
        return {
            ...state,
            comicById: [
                ...action.payload
            ]
        };
        case CHARACTERS_FILTERED_LOADED: 
        return {
            ...state,
            characters: [
                ...action.payload
        ]
    };
        default:
            return state;
    }
}

