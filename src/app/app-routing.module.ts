import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsociadosComponent } from './asociados/asociados.component';
import { PagadoptaComponent } from './pagadopta/pagadopta.component';
import { PaganunciosComponent } from './paganuncios/paganuncios.component';
import { PaginicioComponent } from './paginicio/paginicio.component';
import { PagregistroComponent } from './pagregistro/pagregistro.component';

const routes: Routes = [
  {
    path: '',
    component : PaginicioComponent
  },
  {
    path: 'inicio',
    component : PaginicioComponent
  },
  {
    path: 'adopta',
    component : PagadoptaComponent
  },
  {
    path: 'anuncios',
    component : PaganunciosComponent
  },
  {
    path: 'registro',
    component : PagregistroComponent
  },
  {
    path: 'asociados',
    component : AsociadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
