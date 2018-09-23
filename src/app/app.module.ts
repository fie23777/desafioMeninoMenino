import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { ROTAS } from './routers/routers';

import {NgxPaginationModule} from 'ngx-pagination';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    MatMenuModule,
    BrowserAnimationsModule,
    
    RouterModule.forRoot(ROTAS)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ RouterModule ],
})
export class AppModule { }
