import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';

const routes: Routes = [
  {path: 'Catalogo', component: CatalogoComponent},
  {path: 'Login', component: LoginComponent},
  //{path: 'Login', pathMatch: 'full', redirectTo: 'Login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
