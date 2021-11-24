import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo, canActivate } from '@angular/fire/compat/auth-guard'

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);


const routes: Routes = [
  { 
    path: '',
    component: LoginComponent, 
    canActivate:[AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard }, 
  },
  { path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  { path: 'registro', 
    component: RegistroComponent, 
},
  { path: 'recuperar-pass', component: ForgotPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
