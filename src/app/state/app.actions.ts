import { createAction, props } from '@ngrx/store';
import { Cocktail } from '../interfaces/cocktail.interface';
import { Categorie, SearchOption } from '../interfaces/state.interface';
//import { Book } from '../book-list/books.model';

export const openSearch = createAction(
  '[App Search] open Search'
);

export const closeSearch = createAction(
  '[App Search] close Search'
);

export const toggleSearch = createAction(
  '[App Search] toggle Search',
);

export const showHeader = createAction(
  '[App Header] Show Header'
);

export const hideHeader = createAction(
  '[App Header] Hide Header'
);

export const showHome = createAction(
  '[App Home] Show Home'
);

export const hideHome = createAction(
  '[App Home] Hide Home'
);

export const loadSearchOptions = createAction(
  '[App Cocktail] Load Cocktails Search Options'
);

export const loadSearchOptionsSuccess = createAction(
  '[App Cocktail] Cocktails Search Options Loaded Success',
  props<{ searchOptions: SearchOption}>()
);


export const loadRandomCocktails = createAction(
  '[App Cocktail] Load Random Cocktails'
);

export const loadRandomCocktailsSuccess = createAction(
  '[App Cocktail] Random Cocktails Loaded Success',
  props<{ cocktails: Cocktail[]}>()
);

export const loadRandomCocktailsFail = createAction(
  '[App Cocktail] Random Cocktails Loaded Fails'
);


export const searchCocktail = createAction(
  '[App Cocktail] Search Cocktails',
  props<{ option: string, value: string}>()
);

export const searchCocktailSuccess = createAction(
  '[App Cocktail] Cocktails Searched Success',
  props<{ cocktails: Cocktail[]}>()
);

export const searchCocktailFails = createAction(
  '[App Cocktail] Cocktails Searched Fails'
);
