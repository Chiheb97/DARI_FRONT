import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecaptchaModule } from "ng-recaptcha";
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  token;
  public error: boolean = false;

  email;
  captcha: string;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  resolved(catptchaResponse: string) {
    this.captcha = catptchaResponse;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: ['', [Validators.required]],
    });
  }
  

    submit(): void {
      let body = new URLSearchParams();
      body.set('email', this.form.get(['email']).value);
      body.set('password', this.form.get(['password']).value);
      let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        withCreadentials: true
      };
      this.http.post('http://localhost:8084/SpringMVC/login', body.toString(), options)
        .pipe(map((data) => data))
        .toPromise()
        .then((response) => {
          let resSTR = JSON.stringify(response);
          let resJSON = JSON.parse(resSTR);
          this.token = resJSON.access_token;
          this.email = resJSON.user;
          this.saveCurrentUser(this.token, this.email);
          this.error = false;
        }).catch((error: HttpErrorResponse) => {
          console.log(error)
          console.log("non")
          this.error = true;
        })
        
    }

    saveCurrentUser(token, email): void {
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })

    let options = {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
      };

      this.http.get("http://localhost:8084/SpringMVC/user/findByEmail/" + email, options)
        .pipe(map((data) => data))
        .toPromise()
        .then((response) => {
          let resSTR = JSON.stringify(response);
          let resJSON = JSON.parse(resSTR);
          var testObject = resJSON;
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(testObject));
          let user = JSON.parse(localStorage.getItem('user'));
          console.log(user.role);
          if (user.role == "Admin") {
            this.router.navigate(['/user']).then(() => {
              location.reload();
            });
          } else {
            this.router.navigate(['/admin']).then(() => {
              location.reload();
            });
          }
        }).catch((error: HttpErrorResponse) => {
          console.log(error)
          console.log("non")
        })

    }


  }
