import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as selectors from 'src/app/state/app.selectors';

@Component({
  selector: 'app-populars',
  templateUrl: './populars.component.html',
  styleUrls: ['./populars.component.scss']
})
export class PopularsComponent implements OnInit {
  public cocktails$ = this.store.select(selectors.selectRandomCocktails)

  constructor(private store: Store) { }

  ngOnInit(): void {
    console.log('Popular Component')
  }

}
