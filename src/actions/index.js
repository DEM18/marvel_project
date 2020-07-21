import { CHARACTERS_LOADED, COMICS_LOADED } from 'actions/constants';

export function getCharacters() {
    const options = {
        method: 'GET'
        // headers: {
        //     'Authorization': 'Beareer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmlhZ29tZXpAbWFya2V0LmNvbSIsInBhc3N3b3JkIjoiVGVzdDEyMyEiLCJpYXQiOjE1OTMxMDg4ODYsImV4cCI6MTU5MzEyMzI4Nn0.m1hzNT_PKhyMYHJ6b8wtoxpX3f1OBkJ6yOmYhvhPMIU',
        //     'Content-type': 'application/json;charset=UTF-8'
        // },
    }
    return function(dispatch) {
      return fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=287686e27cf64572120de89d87faad33&ts=1&hash=c6441854bf77f839af3fe40c68b16ed1", options)
        .then(response => response.json())
          .then(response => {
          dispatch({ type: CHARACTERS_LOADED, payload: response.data.results });
        });
    };
}

export function getComicsByCharacter() {
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