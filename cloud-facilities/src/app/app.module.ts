import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './login/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PainelAplicacoesComponent } from './painel-aplicacoes/painel-aplicacoes.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PainelAplicacoesComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
