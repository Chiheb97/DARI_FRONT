import { NgModule } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdduserComponent } from '../user/adduser/adduser.component';
import { UserCompComponent } from '../user/user-comp/user-comp.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './admin/home/home.component';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { AlertModule } from "ngx-bootstrap/alert";
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResetpasswordComponent } from './forgetpassword/resetpassword/resetpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    UserCompComponent,
    AdduserComponent,
    UpdateuserComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    AlertModule.forRoot(),
    NgbModalModule,
    NgbModule


    
    
    

   
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
