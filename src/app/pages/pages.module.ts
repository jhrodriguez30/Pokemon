import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';


import { LoginComponent } from './login/login.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { TipoComponent } from './tipo/tipo.component';
import { HabilidadComponent } from './habilidad/habilidad.component';



@NgModule({
  declarations: [LoginComponent, CatalogoComponent, TipoComponent, HabilidadComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule
  ]
})
export class PagesModule { }
