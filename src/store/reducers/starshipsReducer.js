const defaultState = {
  starships: [], 
};

const ADD_MANY_STARSHIPS = 'ADD_MANY_STARSHIPS';

export const starshipsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_STARSHIPS:
      return { ...state, starships: [...state.starships, ...action.payload] };
    default: 
      return state;
  }
};

export const addManyStarshipsAction = (payload) => ({ type: ADD_MANY_STARSHIPS, payload });