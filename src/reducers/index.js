import { combineReducers } from 'redux';
import { charactersReducer } from 'reducers/characters';

export default combineReducers(
    {
        charactersReducer
    }
)