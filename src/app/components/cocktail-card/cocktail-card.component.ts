import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from 'src/app/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.scss']
})
export class CocktailCardComponent {
  @Input()
  cocktail!:Cocktail;

  constructor() { }
}
