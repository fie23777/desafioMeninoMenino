import {Routes, RouterLinkWithHref, ActivatedRoute} from '@angular/router';

import { AppComponent } from '../app.component';

import { ClienteComponent } from '../cliente/cliente.component';

export const ROTAS: Routes = [
  {path: '', component: AppComponent},
  {path: 'cliente', component: ClienteComponent}
];