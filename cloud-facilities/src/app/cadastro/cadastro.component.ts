import { AuthService } from './../login/auth.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  loading: boolean;
  isConfirm: boolean;
  user: IUser;

  constructor(private router: Router, private authService: AuthService) {
    this.loading = false;
    this.isConfirm = false;
    this.user = {} as IUser;
  }

  public signUp(): void {
    this.loading = true;
    this.authService.signUp(this.user)
    .then(() => {
      this.loading = false;
      this.isConfirm = true;
    }).catch(() => {
      this.loading = false;
    });
  }

  public confirmSignUp(): void {
    this.loading = true;
    this.authService.confirmSignUp(this.user)
    .then(() => {
      this.router.navigate(['/signIn']);
    }).catch(() => {
      this.loading = false;
    });
  }

  public validarSenha(pass: any): any {
    var regexp = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/g),
        validator = regexp.test(pass);
    console.log(validator);
    if (validator === true){
      this.signUp();
    } else{
      alert("Por favor, a senha deve conter 8 caracteres, tendo letras mínusculas, maiúsculas, números e símbolos.");
    }
  }

}
