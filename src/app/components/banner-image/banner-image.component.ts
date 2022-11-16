import { Component, Input, OnInit } from '@angular/core';
import { CocktailList } from 'src/app/interfaces/cocktail.interface';

@Component({
  selector: 'app-banner-image',
  templateUrl: './banner-image.component.html',
  styleUrls: ['./banner-image.component.scss']
})
export class BannerImageComponent implements OnInit {
  @Input()
  CocktailImage:CocktailList | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
