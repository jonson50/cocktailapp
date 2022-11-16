import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BannerImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
