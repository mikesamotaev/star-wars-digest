const defaultState = {
  characters: [],
};

const ADD_MANY_CHARACTERS = 'ADD_MANY_CHARACTERS';

export const charactersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_CHARACTERS:
      return {...state, characters: [...state.characters, ...action.payload]};
    default:
      return state;
  }
};

export const addManyCharactersAction = (payload) => ({ type: ADD_MANY_CHARACTERS, payload });