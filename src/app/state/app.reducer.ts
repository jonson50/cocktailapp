import { createReducer, on } from '@ngrx/store';
import { AppState } from '../interfaces/state.interface';
import * as actions from './app.actions';

export const initialState: AppState = {
  showSearchMenu: false,
  showHeader: true,
  showHome: true,
  randomCocktails: [],
  searchOptions: {
    categories: [],
    glasses: [],
    ingredients:[],
    alcoholics: []
  },
};

export const appReducer = createReducer(
  initialState,
  on(actions.openSearch, state => {
    return {...state, showSearchMenu: true }
  }),
  on(actions.closeSearch, state => {
    return {...state, showSearchMenu: false }
  }),
  on(actions.toggleSearch, state => {
    return {...state, showSearchMenu: !state.showSearchMenu }
  }),
  on(actions.showHeader, state => {
    return {...state, showHeader: true }
  }),
  on(actions.hideHeader, state => {
    return {...state, showHeader: false }
  }),
  on(actions.showHome, state => {
    return {...state, showHome: true }
  }),
  on(actions.hideHome, state => {
    return {...state, showHome: false }
  }),
  on(actions.loadRandomCocktailsSuccess, (state, { cocktails }) => {
    return {...state, randomCocktails: cocktails }
  }),
  on(actions.loadSearchOptionsSuccess, (state, { searchOptions }) => {
    return {...state, searchOptions: searchOptions }
  })
);
