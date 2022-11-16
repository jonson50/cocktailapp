import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailList } from 'src/app/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-alcoholic-banner',
  templateUrl: './alcoholic-banner.component.html',
  styleUrls: ['./alcoholic-banner.component.scss']
})
export class AlcoholicBannerComponent implements OnInit {
  public randomCocktails: CocktailList[] = [];

  constructor(private service: CocktailService) { }

  ngOnInit(): void {
    this.service.getAlcoholics().subscribe(cocktails => {
      while (this.randomCocktails.length < 5) {
        const random = Math.floor(Math.random() * cocktails.length);
        this.randomCocktails.push(cocktails[random]);
      }
    });
  }
}
