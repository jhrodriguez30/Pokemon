import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { CatalogoComponent } from './catalogo/catalogo.component';



@NgModule({
  declarations: [LoginComponent, CatalogoComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ]
})
export class PagesModule { }
