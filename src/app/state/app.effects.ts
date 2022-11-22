import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CocktailService } from '../services/cocktail.service';


@Injectable()
export class AppEffects {

  loadRandoCocktails$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[App Cocktail] Load Random Cocktails'),
      mergeMap(() => this.service.getRandomCocktail()
        .pipe(
          map(cocktails => ({ type: '[App Cocktail] Random Cocktails Loaded Success', cocktails: cocktails })),
          catchError(() => of({ type: '[App Cocktail] Random Cocktails Loaded Fails' }))
        )
      )
    )
  );

  loadSearchOptions$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[App Cocktail] Load Cocktails Search Options'),
      mergeMap(() => this.service.getSearchOptions()
        .pipe(
          map(searchOptions => ({ type: '[App Cocktail] Cocktails Search Options Loaded Success', searchOptions })),
          catchError(() => of({ type: '[App Cocktail] Random Cocktails Loaded Fails' }))
        )
      )
    )
  );

  searchCocktail$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[App Cocktail] Search Cocktails'),
      mergeMap((opt: any) => {
        return this.service.searchCocktail(opt.option, opt.value)
          .pipe(
            map(cocktails => ({ type: '[App Cocktail] Cocktails Searched Success', cocktails })),
            catchError(() => of({ type: '[App Cocktail] Cocktails Searched Fails' }))
          )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private service: CocktailService
  ) { }
}
