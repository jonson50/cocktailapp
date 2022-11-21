import { Cocktail } from "./cocktail.interface";

export interface Categorie {
  strCategory: string;
}

export interface Glass {
  strGlass: string;
}

export interface Ingredient {
  strIngredient1: string;
}

export interface Alcoholic {
  strAlcoholic: string;
}

export interface SearchOption {
  categories: Categorie[];
  glasses: Glass[];
  ingredients: Ingredient[];
  alcoholics: Alcoholic[];
}

export interface AppState {
  showSearchMenu: boolean;
  showHeader: boolean;
  showHome: boolean;
  randomCocktails: Cocktail[];
  searchOptions: SearchOption;
}
