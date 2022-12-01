import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, Observable, of, zip } from 'rxjs';
import { CallCocktailListResponse, CocktailList, Cocktail } from '../interfaces/cocktail.interface';
import { Alcoholic, Categorie, Glass, Ingredient, SearchOption } from '../interfaces/state.interface';

@Injectable({ providedIn: 'root' })
export class CocktailService {
  baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
  constructor(private http: HttpClient) { }

  getAlcoholics(): Observable<CocktailList[]> {
    return this.http.get<CocktailList[]>(`${this.baseUrl}filter.php?a=Alcoholic`).pipe(
      map((c: any) => c.drinks)
    )
  }

  getNonAlcoholics(): Observable<CocktailList[]> {
    return this.http.get<CocktailList[]>(`${this.baseUrl}filter.php?a=Non_Alcoholic`).pipe(
      map((c: any) => c.drinks)
    )
  }

  getCocktailById(id: string): Observable<Cocktail> {
    return this.http.get<Cocktail>(`${this.baseUrl}lookup.php?i=${id}`).pipe(
      map((c: any) => c.drinks[0])
    )
  }

  getRandomCocktail(): Observable<Cocktail[]> {
    return this.http.get<Cocktail>(`${this.baseUrl}random.php`).pipe(
      map((c: any) => c.drinks[0]),
      mergeMap((cocktail: Cocktail) => {
        return zip(
          of(cocktail),
          this.http.get<Cocktail>(`${this.baseUrl}random.php`).pipe(map((c: any) => c.drinks[0]))
        )
      }),
      mergeMap(([random1, random2]: Cocktail[]) => {
        return zip(
          of(random1),
          of(random2),
          this.http.get<Cocktail>(`${this.baseUrl}random.php`).pipe(map((c: any) => c.drinks[0]))
        )
      }),
      mergeMap(([random1, random2, random3]: Cocktail[]) => {
        return zip(
          of(random1),
          of(random2),
          of(random3),
          this.http.get<Cocktail>(`${this.baseUrl}random.php`).pipe(map((c: any) => c.drinks[0]))
        )
      })
    )
  }

  getSearchOptions(): Observable<SearchOption> {
    return this.http.get<Categorie>(`${this.baseUrl}list.php?c=list`).pipe(
      map((c: any) => c.drinks),
      mergeMap((categorie: Categorie) => {
        return zip(
          of(categorie),
          this.http.get<Glass>(`${this.baseUrl}list.php?g=list`).pipe(map((c: any) => c.drinks)),
          this.http.get<Ingredient>(`${this.baseUrl}list.php?i=list`).pipe(map((c: any) => c.drinks)),
          this.http.get<Alcoholic>(`${this.baseUrl}list.php?a=list`).pipe(map((c: any) => c.drinks))
        )
      }),
      map(([categories, glasses, ingredients, alcoholics]: any[]) => {
        return ({
          categories,
          glasses,
          ingredients,
          alcoholics
        });
      }),
    )
  }

  searchCocktail(option: string, value: string): Observable<Cocktail[]> {
    let filter = '';
    filter = option === "name" ?
      `search.php?s=${value}` :
      `filter.php?${option[0]}=${value.toLowerCase()}`;

    return this.http.get<Cocktail[]>(`${this.baseUrl}${filter}`).pipe(
      map((c: any) => c.drinks)
    )
  }
}
