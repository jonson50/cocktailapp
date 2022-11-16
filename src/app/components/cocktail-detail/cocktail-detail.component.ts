import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Cocktail } from 'src/app/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.scss']
})
export class CocktailDetailComponent implements OnDestroy {
  cocktail!:Cocktail;
  onGetCocktail!:Subscription;

  constructor(private activatedRoute: ActivatedRoute, private service: CocktailService) {
    this.activatedRoute.params.subscribe( params => {
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
