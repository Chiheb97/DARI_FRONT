import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from '../user/adduser/adduser.component';
import { UserCompComponent } from '../user/user-comp/user-comp.component';
import { HomeComponent } from './admin/home/home.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './forgetpassword/resetpassword/resetpassword.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [
  { path: "user", component: UserCompComponent },
  { path: "adduser", component: AdduserComponent },
  { path: "update/:id", component: UpdateuserComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "admin", component: HomeComponent },
  { path: "forgetpassword", component: ForgetpasswordComponent },
  { path: "resetpassword/:token/:email", component: ResetpasswordComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
