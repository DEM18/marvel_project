import { CHARACTERS_LOADED, COMICS_LOADED, COMIC_LOADED, 
    CHARACTERS_FILTERED_LOADED, ADD_FAVORITE_CHARACTER} from 'actions/constants';

const initialState = {
    characters: [],
    favoriteCharacters: [],
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
        case ADD_FAVORITE_CHARACTER: 
        let arrayOfCharacters = state.characters; 
        let arrayOfFavorites = state.favoriteCharacters;
        let newFavoriteCharacter = arrayOfCharacters.find( character => character.id === action.payload );
        // let existCharacter = false;

        // let favoriteCharacters = arrayOfCharacters.map( character => {
        //     if( character.id === action.payload ){
        //         console.log("el personaje ya existe")
        //         existCharacter = true;
        //     }
        //     return character;
        //     });
       

        // if(!existCharacter) {
        //     let newFavoriteCharacter = arrayOfCharacters.find( character => character.id === action.payload );
        //     favoriteCharacters = [ ...arrayOfFavorites, 
        //              ...newFavoriteCharacter
        //          ]
        // }

        return {
            ...state,
            favoriteCharacters: [
                ...state.favoriteCharacters,
                newFavoriteCharacter
            ]
        }
        default:
            return state;
    }
}

