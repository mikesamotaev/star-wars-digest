import { addManyCharactersAction } from '../reducers/charactersReducer';

export const fetchCharacters = () => async (dispatch) => {
  const response = await fetch('https://swapi.dev/api/people/');
  const data = await response.json();
  const results = data.results;

  dispatch(addManyCharactersAction(results));
}