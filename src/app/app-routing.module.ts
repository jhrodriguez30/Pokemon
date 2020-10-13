import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HabilidadComponent } from './pages/habilidad/habilidad.component';
import { TipoComponent } from './pages/tipo/tipo.component';

const routes: Routes = [
  {path: 'Catalogo', component: CatalogoComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Habilidad', component: HabilidadComponent},
  {path: 'Tipo', component: TipoComponent}
  //{path: 'Login', pathMatch: 'full', redirectTo: 'Login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
