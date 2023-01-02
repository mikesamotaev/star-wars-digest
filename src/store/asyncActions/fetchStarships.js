import { addManyStarshipsAction } from '../reducers/starshipsReducer';

export const fetchStarships = () => async (dispatch) => {
  const response = await fetch('https://swapi.dev/api/starships/');
  const data = await response.json();
  const results = data.results;

  dispatch(addManyStarshipsAction(results))
}; 