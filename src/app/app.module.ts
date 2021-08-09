import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderinicioComponent } from './headerinicio/headerinicio.component';
import { HeaderadoptaComponent } from './headeradopta/headeradopta.component';
import { HeaderanunciosComponent } from './headeranuncios/headeranuncios.component';
import { HeaderregistroComponent } from './headerregistro/headerregistro.component';
import { PaginicioComponent } from './paginicio/paginicio.component';
import { PagadoptaComponent } from './pagadopta/pagadopta.component';
import { PaganunciosComponent } from './paganuncios/paganuncios.component';
import { PagregistroComponent } from './pagregistro/pagregistro.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AsociadosComponent } from './asociados/asociados.component';
//import { MatButtonModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderinicioComponent,
    HeaderadoptaComponent,
    HeaderanunciosComponent,
    HeaderregistroComponent,
    PaginicioComponent,
    PagadoptaComponent,
    PaganunciosComponent,
    PagregistroComponent,
    AsociadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
