import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as selectors from 'src/app/state/app.selectors';
import * as actions from 'src/app/state/app.actions';
@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent implements OnInit {
  public searchedCocktails$ = this.store.select(selectors.selectSearchedCocktails);

  constructor(private store: Store, private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.store.dispatch(actions.openSearch());
    this.activatedRoute.params.subscribe( (params: any) => {
      this.store.dispatch(actions.searchCocktail({ option: params.option, value:params.id }));
    });
  }

}
