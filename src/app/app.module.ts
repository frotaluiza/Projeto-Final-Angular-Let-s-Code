import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { ButtonComponent } from './Components/Shared/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { MovieCardComponent } from './Components/movie-card/movie-card.component'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ButtonComponent,
    MovieCardComponent,
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
