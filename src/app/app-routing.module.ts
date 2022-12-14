import { AdministrationComponent } from './administration/administration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BakeryComponent } from './bakery/bakery.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { HomeComponent } from './home/home.component';
import { PrimaryNavBarComponent } from './primary-nav-bar/primary-nav-bar.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AdministationUsersComponent } from './administation-users/administation-users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'navigation', component: PrimaryNavBarComponent },
  { path: 'bakery/:id', component: BakeryComponent },
  {
    path: 'cart',
    component: CartComponentComponent,
  },
  { path: 'cart/:id', component: OrderDetailsComponent },
  {
    path: 'administration',
    component: AdministrationComponent,
    children: [
      {
        path: 'users',
        component: AdministationUsersComponent,
        outlet: 'administration',
      },
      {
        path: '',
        component: AdministationUsersComponent,
        outlet: 'administration',
      },
    ],
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
