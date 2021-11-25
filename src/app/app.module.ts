import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { ButtonComponent } from './Components/Shared/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { MovieCardComponent } from './Components/movie-card/movie-card.component'

import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { MatIconModule } from '@angular/material/icon'
import { UserSelectionComponent } from './Components/user-selection/user-selection.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { UserCardComponent } from './Components/Shared/user-card/user-card.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ButtonComponent,
    MovieCardComponent,
    LandingPageComponent,
    UserSelectionComponent,
    NavbarComponent,
    UserCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
