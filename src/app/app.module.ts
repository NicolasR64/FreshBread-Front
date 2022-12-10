import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BakeryComponent } from './bakery/bakery.component';
import { AdministrationComponent } from './administration/administration.component';
import { PrimaryNavBarComponent } from './primary-nav-bar/primary-nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { AddUserDialogComponent } from './dialogs/add-user/add-user.component';
import { UpdateUserDialogComponent } from './dialogs/update-user/update-user.component';
import { DeleteUserDialogComponent } from './dialogs/delete-user/delete-user.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    PrimaryNavBarComponent,
    HomeComponent,
    BakeryComponent,
    CartComponentComponent,
    AdministrationComponent,
    AddUserDialogComponent,
    UpdateUserDialogComponent,
    DeleteUserDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
