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
import { UserSelectionComponent } from './Components/user-selection/user-selection.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { UserCardComponent } from './Components/Shared/user-card/user-card.component';
import { NetflixLoaderComponent } from './Components/Shared/netflix-loader/netflix-loader.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { LoginFooterComponent } from './Components/login-page/login-footer/login-footer.component';
import { LoginHeaderComponent } from './Components/login-page/login-header/login-header.component';
import { LoginModalComponent } from './Components/login-page/login-modal/login-modal.component';
import { ReactiveFormsModule } from '@angular/forms';




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
    NetflixLoaderComponent,
    LoginPageComponent,
    LoginFooterComponent,
    LoginHeaderComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    NoopAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
