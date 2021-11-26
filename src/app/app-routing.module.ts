import { MainPageComponent } from './Components/main-page/main-page.component';
import { UserSelectionComponent } from './Components/user-selection/user-selection.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { ModalComponent } from './Components/modal/modal.component';
import { AuthGuard } from './Services/auth/auth.guard';

const routes: Routes = [
  { path: 'user-selection', component: UserSelectionComponent, canActivate: [AuthGuard] },
  { path: 'main', component: MainPageComponent, canActivate: [AuthGuard] },
  { path: 'home', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'modal', component: ModalComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
