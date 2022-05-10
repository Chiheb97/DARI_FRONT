import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user/user'
import {  Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
 
export class UserService {
  token = localStorage.getItem('token');
   url = 'http://localhost:8084/SpringMVC/';
  constructor(private httpClient: HttpClient) { }

  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };


  options1 = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
    responseType: 'text' as 'text'
  };

  findByEmail(user: User | string) {
    const email = typeof user === 'string' ? user : user.email;
    return this.httpClient.get<User>(this.url + "user/findByEmail/" + email, this.options);
  }
  getAllUser() {
    return this.httpClient.get<User[]>(`${this.url}user/users`, this.options);
  }
  addUser(User: any) {
    return this.httpClient.post(`${this.url}registration`, User,this.options)

    
  } 

  getUser(id: any): Observable<User> {
    return this.httpClient.get<User>(`${this.url}user/find-user/${id}`, this.options)
  }
  
  editUser(User: any) {
    return this.httpClient.put(`${this.url}user/update-user/`, User, this.options)
  }
  deleteUser(id: any) {
    return this.httpClient.delete(`${this.url}user/delete/${id}`, this.options)
  }

  register(User: any) {
    return this.httpClient.post(`${this.url}registration`, User, this.options)

  }
  forgetpassword(email:string){
  	return this.httpClient.get(this.url+"registration/forgetpassword/"+email);
  }

  resetpassword(email:string,token:string,newPass:string){
  	return this.httpClient.get(this.url+"registration/reset/"+token+"/"+email+"/"+newPass);
  }

}
