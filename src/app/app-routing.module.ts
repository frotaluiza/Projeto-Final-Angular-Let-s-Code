import { MainPageComponent } from './Components/main-page/main-page.component';
import { UserSelectionComponent } from './Components/user-selection/user-selection.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { ModalComponent } from './Components/modal/modal.component';

const routes: Routes = [
  { path: 'user-selection', component: UserSelectionComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'home', component: LandingPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'modal', component: ModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
