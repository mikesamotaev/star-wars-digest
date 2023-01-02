import { addManyPlanetsAction } from '../reducers/planetsReducer';

export const fetchPlanets = () => async (dispatch) => {
  const response = await fetch('https://swapi.dev/api/planets/');
  const data = await response.json();
  const results = data.results;

  dispatch(addManyPlanetsAction(results));
};