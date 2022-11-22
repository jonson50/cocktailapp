import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as selectors from 'src/app/state/app.selectors';
@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent implements OnInit {
  public searchedCocktails$ = this.store.select(selectors.selectSearchedCocktails);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
