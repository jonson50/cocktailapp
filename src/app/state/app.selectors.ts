import { createSelector, createFeatureSelector } from '@ngrx/store';
//import { Book } from '../book-list/books.model';
import { AppState } from '../interfaces/state.interface';

export const selectAppState = createFeatureSelector<AppState>('state');

/* export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection'); */
export const showSearchBox = createSelector(
  selectAppState,
  (state: AppState) => state.showSearchMenu
);

export const selectShowHeader = createSelector(
  selectAppState,
  (state: AppState) => state.showHeader
);

export const selectRandomCocktails = createSelector(
  selectAppState,
  (state: AppState) => state.randomCocktails
);

export const selectSearchOptions = createSelector(
  selectAppState,
  (state: AppState) => state.searchOptions
);
