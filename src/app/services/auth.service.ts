import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private aFauth:AngularFireAuth, private router: Router) {
    aFauth.authState.subscribe(user=>{
      console.log(user)})
   }

  async register(email:string, password:string){
    try{
      return await this.aFauth.createUserWithEmailAndPassword(email, password).then((result) => {
        if (result.user?.emailVerified !== true) {
          result.user?.sendEmailVerification();
        }
        else {
          window.alert('Este mail ya se encuentra en uso')
        }
      });

    }catch (err){
      console.log("error en registro: ", err)
      return null;
    }
  }
  async login(email:string, password:string){
    try{
      return await this.aFauth.signInWithEmailAndPassword(email, password).then((result) =>{
        if (result.user?.emailVerified !== true) {
          window.alert('Usuario No Verificado')
        }
        else {
          this.router.navigate(['dashboard'])
        }
      });
    }catch (error){
      window.alert("Error en login con usuario y contraseña")
      return null;
    }
  }

  async loginGoogle(email:string, password:string){
    try{
      return await this.aFauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }catch (err){
      window.alert("Error en login con Google")
      return null;
    }
  }

  async resetPassword(email:string){
    try{
      return await this.aFauth.sendPasswordResetEmail(email);
    }catch (err){
      console.log(err)
      return null;
    }
  }

}
