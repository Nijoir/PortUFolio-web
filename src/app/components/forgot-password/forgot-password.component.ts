import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [AuthService]
})
export class ForgotPasswordComponent implements OnInit {

  Email = ''; 

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  async onReset(){
    try{
      const email = this.Email; 
      await this.auth.resetPassword(email);
      window.alert('Email sent, check your inbox!');
      this.router.navigate([''])
    }catch (error) {
      console.log(error);
    }
    
  }

}
