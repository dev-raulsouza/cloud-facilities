import { CadastroComponent } from './cadastro/cadastro.component';
import { PainelAplicacoesComponent } from './painel-aplicacoes/painel-aplicacoes.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'painel-aplicacoes',
    component: PainelAplicacoesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
