import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
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
  public options = [];

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(actions.loadSearchOptions())
  }

  togglePanel(): void {
    this.store.dispatch(actions.toggleSearch())
  }

  search(): void {
    this.router.navigate(['results', 'dddd']);
  }
}
