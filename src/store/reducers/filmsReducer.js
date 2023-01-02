const defaultState = {
  films: [],
};

const ADD_MANY_FILMS = 'ADD_MANY_FILMS'; 

export const filmsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_FILMS:
      return { ...state, films: [...state.films, ...action.payload] };
    default:
      return state; 
  }
};

export const addManyFilmsAction = (payload) => ({ type: ADD_MANY_FILMS, payload });