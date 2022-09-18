import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cloud-facilities';

  constructor(private authService: AuthService) { }

  public usuarioEstaAutenticado(){
    return this.authService.usuarioEstaAutenticado();
  }
}
