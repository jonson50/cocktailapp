import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SearchOption } from 'src/app/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/services/cocktail.service';
import * as actions from 'src/app/state/app.actions';
import * as selectors from 'src/app/state/app.selectors';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  public showSearchMenu$ = this.store.select(selectors.showSearchBox);
  public searchOptions$ = this.store.select(selectors.selectSearchOptions);
  public selectedOption!: SearchOption;
  public selectedOption2: any;
  public options = [
    {id:0, name: 'Cocktail Name', value:'none'},
    {id:1, name: 'Category', value:'categories'},
    {id:2, name: 'Glass', value:'glasses'},
    {id:3, name: 'Ingredient', value:'ingredients'},
    {id:4, name: 'Alcohol', value:'alcoholics'}
  ];

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(actions.loadSearchOptions())
  }

  togglePanel(): void {
    this.selectedOption = this.options[0];
    this.store.dispatch(actions.toggleSearch())
  }

  search(): void {
    this.router.navigate(['results', 'dddd']);
  }
}
