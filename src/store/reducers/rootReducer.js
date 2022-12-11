import { combineReducers } from 'redux';
import { charactersReducer } from './charactersReducer';
import { filmsReducer } from './filmsReducer';
import { planetsReducer } from './planetsReducer';
import { starshipsReducer } from './starshipsReducer';

export const rootReducer = combineReducers({
  charactersReducer,
  filmsReducer,
  planetsReducer,
  starshipsReducer,
});