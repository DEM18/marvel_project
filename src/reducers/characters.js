import { CHARACTERS_LOADED } from 'actions/constants';

const initialState = {
    characters: []
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
            }
        default:
            return state;
    }
}

