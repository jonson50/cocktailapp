import { Component, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';
import { SearchingOption } from 'src/app/interfaces/cocktail.interface';
import { SearchOption } from 'src/app/interfaces/state.interface';
import * as actions from 'src/app/state/app.actions';
import * as selectors from 'src/app/state/app.selectors';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit, OnDestroy {
  // injected
  private readonly router = inject(Router);
  private store = inject(Store);
  // Privates
  private suscription!: Subscription;
  private searchOptions!: SearchOption;
  private currentRoute = '/';
  // Publics
  public selectedOption!: SearchingOption;
  public selectedOption2: any;
  public showInput = true;
  public isNavBarTransparent = true;
  public options2: any[] = [];
  public options: SearchingOption[] = [
    { id: 0, name: 'Cocktail Name', value: 'name' },
    { id: 1, name: 'Category', value: 'categories' },
    { id: 2, name: 'Glass', value: 'glasses' },
    { id: 3, name: 'Ingredient', value: 'ingredients' },
    { id: 4, name: 'Alcohol', value: 'alcoholics' },
  ];
  // Observables
  public showSearchMenu$ = this.store.select(selectors.showSearchBox);

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    console.log(this.isNavBarTransparent)
    if(this.currentRoute !== '/home') {
      this.isNavBarTransparent = false;
      return;
    }
    if (event.target.body.scrollTop > 150 || event.target.documentElement.scrollTop > 150) {
      this.isNavBarTransparent = false;
    } else {
      this.isNavBarTransparent = true;
    }
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  ngOnInit(): void {
    this.selectedOption = this.options[0];
    this.suscription = this.store
      .select(selectors.selectSearchOptions)
      .subscribe((opciones) => {
        this.searchOptions = opciones;
      });
    this.store.dispatch(actions.loadSearchOptions());

    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
          .subscribe((event: { url: any; }) =>
           {
              this.currentRoute = event.url;
              console.log(this.currentRoute)
              this.isNavBarTransparent = (this.currentRoute === '/home' || this.currentRoute === '/' ) ? true : false;
           });
  }

  togglePanel(): void {
    this.store.dispatch(actions.toggleSearch());
  }

  search(): void {
    this.store.dispatch(actions.toggleSearch());
    this.router.navigate([
      'results',
      this.selectedOption.value,
      this.selectedOption2,
    ]);
  }

  selectOption1(event: any): void {
    this.showInput = event.value === 'name' ? true : false;
    this.selectedOption2 = null;
    if (Object.hasOwn(this.searchOptions, event.value)) {
      switch (event.value) {
        case 'categories':
          this.options2 = this.searchOptions.categories.map((val, i) => {
            return { id: i + 1, value: val.strCategory };
          });
          break;
        case 'alcoholics':
          this.options2 = this.searchOptions.alcoholics.map((val, i) => {
            return { id: i + 1, value: val.strAlcoholic };
          });
          break;
        case 'glasses':
          this.options2 = this.searchOptions.glasses.map((val, i) => {
            return { id: i + 1, value: val.strGlass };
          });
          break;
        case 'ingredients':
          this.options2 = this.searchOptions.ingredients.map((val, i) => {
            return { id: i + 1, value: val.strIngredient1 };
          });
          break;
      }
      this.selectedOption2 = this.options2[0].value;
    }
  }
}
