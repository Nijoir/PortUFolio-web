import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = {

    email: '',
    password: ''

  }

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async Ingresar() {
    try{
      console.log(this.usuario);
      const { email, password } = this.usuario;
      await this.auth.login(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async IngresarGoogle() {
    try{
      const { email, password } = this.usuario;
      await this.auth.loginGoogle(email, password).then(() => this.router.navigate(['dashboard']))
    }catch (error) {
      console.log(error);
    }
  }

}
