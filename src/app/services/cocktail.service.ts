import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CallCocktailListResponse, CocktailList, Cocktail } from '../interfaces/cocktail.interface';

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
}
