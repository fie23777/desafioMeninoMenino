import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { RouterModule } from '@angular/router';
import { ROTAS } from './routers/routers';

import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    
    RouterModule.forRoot(ROTAS)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ RouterModule ],
})
export class AppModule { }
