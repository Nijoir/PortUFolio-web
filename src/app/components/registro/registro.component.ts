import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  usuario = {

    email: '',
    password: '',
    password2: '',
  }
  

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

 async Registro() {
    try{
      const { email, password } = this.usuario;
      this.auth.register(email, password).then(() => this.router.navigate(['']));
    }catch (error) {
      console.log(error);
    }
  }

}
