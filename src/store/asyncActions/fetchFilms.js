import { addManyFilmsAction } from '../reducers/filmsReducer';

export const fetchFilms = () => async (dispatch) => {
  const response = await fetch('https://swapi.dev/api/planets/');
  const data = await response.json();
  const results = data.results;

  dispatch(addManyFilmsAction(results));
};