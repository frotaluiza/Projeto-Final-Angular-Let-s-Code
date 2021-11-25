import { MainPageComponent } from './Components/main-page/main-page.component';
import { UserSelectionComponent } from './Components/user-selection/user-selection.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';

const routes: Routes = [
  { path: 'user-selection', component: UserSelectionComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'home', component: LandingPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
