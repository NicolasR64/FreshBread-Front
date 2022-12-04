import { AdministrationComponent } from './administration/administration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BakeryComponent } from './bakery/bakery.component';
import { HomeComponent } from './home/home.component';
import { PrimaryNavBarComponent } from './primary-nav-bar/primary-nav-bar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'navigation', component: PrimaryNavBarComponent },
  { path: 'bakery/:id', component: BakeryComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
