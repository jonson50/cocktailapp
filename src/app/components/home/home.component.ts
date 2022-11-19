import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/state/app.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    console.log('ddd')
    this.store.dispatch(actions.closeSearch())
    this.store.dispatch(actions.loadRandomCocktails());
  }

}
