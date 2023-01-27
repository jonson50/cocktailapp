import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Cocktail } from 'src/app/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/services/cocktail.service';
import * as actions from 'src/app/state/app.actions';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.scss']
})
export class CocktailDetailComponent implements OnDestroy {
  cocktail!:Cocktail | null;
  onGetCocktail!:Subscription;

  constructor(private activatedRoute: ActivatedRoute, private service: CocktailService, private store: Store) {
    this.activatedRoute.params.subscribe( params => {
      this.cocktail = null;
      this.store.dispatch(actions.closeSearch());
      this.store.dispatch(actions.loadRandomCocktails());
      this.onGetCocktail = this.service.getCocktailById(params['id'])
      .subscribe(
        (cocktail:Cocktail) => this.cocktail = cocktail
      )
    })
  }

  ngOnDestroy(): void {
    this.onGetCocktail.unsubscribe();
  }

}
