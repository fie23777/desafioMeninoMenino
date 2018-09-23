import {Routes, RouterLinkWithHref, ActivatedRoute} from '@angular/router';

import { ClienteComponent } from '../cliente/cliente.component';
import { HomeComponent } from '../home/home.component';

export const ROTAS: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cliente', component: ClienteComponent}
];