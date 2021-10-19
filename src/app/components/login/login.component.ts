import { Component, OnInit } from '@angular/core';
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

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  Ingresar() {
    console.log(this.usuario);
    const { email, password } = this.usuario;
    this.auth.login(email, password).then(res => {
      console.log("se ingreso: ", res);
    })
  }

  IngresarGoogle() {
    const { email, password } = this.usuario;
    this.auth.loginGoogle(email, password).then(res => {
      console.log("se ingreso: ", res);
    })
  }

}
