import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecargasComponent } from './recargas/recargas.component';

const routes: Routes = [
  {path: '', component: LoginComponent}
  ,{path:'login', component:LoginComponent}
  ,{path:'recargas/:id', component:RecargasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
