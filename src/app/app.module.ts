import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlcoholicBannerComponent } from './components/alcoholic-banner/alcoholic-banner.component';
import { NonAlcoholicBannerComponent } from './components/non-alcoholic-banner/non-alcoholic-banner.component';
import { PopularsComponent } from './components/populars/populars.component';
import { CocktailDetailComponent } from './components/cocktail-detail/cocktail-detail.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerImageComponent } from './components/banner-image/banner-image.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './state/app.reducer';
import { CocktailCardComponent } from './components/cocktail-card/cocktail-card.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './state/app.effects';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    AlcoholicBannerComponent,
    NonAlcoholicBannerComponent,
    PopularsComponent,
    CocktailDetailComponent,
    HomeComponent,
    BannerImageComponent,
    ResultsPageComponent,
    CocktailCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({state: appReducer}),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
