import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  usuario = {

    email: '',
    password: ''

  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  Registro() {
    const { email, password } = this.usuario;
    this.auth.register(email, password).then(res => {
      console.log("se registro: ", res);
    })

  }

}
