const defaultState = {
  planets: [],
};

const ADD_MANY_PLANETS = 'ADD_MANY_PLANETS';

export const planetsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_PLANETS:
      return {...state, planets: [...state.planets, ...action.payload]}
    default:
      return state;
  }
};

export const addManyPlanetsAction = (payload) => ({ type: ADD_MANY_PLANETS, payload });