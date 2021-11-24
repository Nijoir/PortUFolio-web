import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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
  

  constructor(private auth: AuthService, private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

 async Registro() {
    try{
      const { email, password } = this.usuario;
      this.auth.register(email, password).then(() => this.afAuth.signOut());
      this.router.navigate(['']);
    }catch (error) {
      console.log(error);
    }
  }

}
