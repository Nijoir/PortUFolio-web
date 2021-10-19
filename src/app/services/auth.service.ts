import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth) {
    auth.authState.subscribe(user=>{
      console.log(user)})
   }

  async register(email:string, password:string){
    try{
      return await this.auth.createUserWithEmailAndPassword(email, password);
    }catch (err){
      console.log("error en registro: ", err)
      return null;
    }
  }
  async login(email:string, password:string){
    try{
      return await this.auth.signInWithEmailAndPassword(email, password);
    }catch (err){
      console.log("error en login: ", err)
      return null;
    }
  }

  async loginGoogle(email:string, password:string){
    try{
      return await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }catch (err){
      console.log("error en login con google: ", err)
      return null;
    }
  }


  logOut(){
    return this.auth.signOut()
  }

}
