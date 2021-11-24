import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { LoginComponent } from './components/login/login.component';
import { environment } from 'src/environments/environment';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireStorageModule} from '@angular/fire/compat/storage'
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneComponent } from './components/dropzone/dropzone.component';
import { UploadComponent } from './components/upload/upload.component';
import { ListaComponent } from './components/lista/lista.component';
import { QRCodeModule } from 'angular2-qrcode';
import { UploadDetailsComponent } from './components/upload-details/upload-details.component';
import { ClipboardModule } from 'ngx-clipboard';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    RegistroComponent,
    ForgotPasswordComponent,
    DropzoneComponent,
    UploadComponent,
    ListaComponent,
    UploadDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    QRCodeModule,
    ClipboardModule
    
  ],
  providers: [NgbActiveModal
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
