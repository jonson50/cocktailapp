import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/state/app.actions';
import * as selectors from 'src/app/state/app.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public random$ = this.store.select(selectors.selectRandomCocktails);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(actions.closeSearch())
    this.store.dispatch(actions.loadRandomCocktails());
  }

}
