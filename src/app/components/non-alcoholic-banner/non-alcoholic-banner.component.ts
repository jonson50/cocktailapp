import { Component, OnInit } from '@angular/core';
import { CocktailList } from 'src/app/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-non-alcoholic-banner',
  templateUrl: './non-alcoholic-banner.component.html',
  styleUrls: ['./non-alcoholic-banner.component.scss']
})
export class NonAlcoholicBannerComponent implements OnInit {
  private cocktails: CocktailList[] = [];
  public randomCocktails: CocktailList[] = [];

  constructor(private service: CocktailService) { }

  ngOnInit(): void {
    this.service.getNonAlcoholics().subscribe(c => {
      console.log(c)
      this.cocktails = c;

      while (this.randomCocktails.length < 5) {
        const random = Math.floor(Math.random() * this.cocktails.length);
        this.randomCocktails.push(this.cocktails[random]);
      }
      console.log(this.randomCocktails);
    });
  }
}
