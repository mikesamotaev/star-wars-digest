import { addManyCharactersAction } from '../reducers/charactersReducer';

export const fetchCharacters = () => async (dispatch) => {
  console.log('fetchCharacters')
  const response = await fetch('https://swapi.dev/api/people/');
  const data = await response.json();
  const results = data.results;
  console.log('results', results)
  dispatch(addManyCharactersAction(results));
}