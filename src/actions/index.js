import { CHARACTERS_LOADED, COMICS_LOADED, COMIC_LOADED, CHARACTERS_FILTERED_LOADED } from 'actions/constants';

export function getCharacters() {
    const options = {
        method: 'GET'
    }
    return function(dispatch) {
      return fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=287686e27cf64572120de89d87faad33&ts=1&hash=c6441854bf77f839af3fe40c68b16ed1", options)
        .then(response => response.json())
          .then(response => {
            dispatch({ type: CHARACTERS_LOADED, payload: response.data.results });
        });
    };
}

export function getComicsByCharacter( characterId ) {
  const options = {
    method: 'GET'
  }
  return function(dispatch) {
    return fetch(`https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?apikey=287686e27cf64572120de89d87faad33&ts=1&hash=c6441854bf77f839af3fe40c68b16ed1`, options)
      .then(response => response.json())
        .then(response => {
          dispatch({ type: COMICS_LOADED, payload: response.data.results });
    });
  };
}

export function getComicById( comicId ) {
  const options = {
    method: 'GET'
  }
  return function(dispatch) {
    return fetch(`https://gateway.marvel.com:443/v1/public/comics/${comicId}?apikey=287686e27cf64572120de89d87faad33&ts=1&hash=c6441854bf77f839af3fe40c68b16ed1`, options)
      .then(response => response.json())
        .then(response => {
          dispatch({ type: COMIC_LOADED, payload: response.data.results });
    });
  };
}


export function getCharactersByName( characterName ) {
  const options = {
    method: 'GET'
  }
  return function(dispatch) {
    return fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${characterName}&apikey=287686e27cf64572120de89d87faad33&ts=1&hash=c6441854bf77f839af3fe40c68b16ed1`, options)
      .then(response => response.json())
        .then(response => {
          dispatch({ type: CHARACTERS_FILTERED_LOADED, payload: response.data.results });
    });
  };
}

