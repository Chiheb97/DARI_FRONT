import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { UserService } from '../../user/user-service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userform !: FormGroup;
  error: boolean;
  captcha: string;

  constructor(private us: UserService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
  resolved(catptchaResponse: string) {
    this.captcha = catptchaResponse;
  }
  ngOnInit(): void {
    this.userform = new FormGroup({
      username: new FormControl('', Validators.required),
      role: new FormControl("User"),
      num: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email,Validators.required]),
      password: new FormControl('', Validators.required),
      favoris: new FormControl(),
      enabled: new FormControl(false),
      locked: new FormControl(false),


    }
     
    );

    this.route.paramMap.subscribe(params => {
      const userId = params.get('id');
      if (userId) {
        this.us.getUser(userId);
      }

    })
  }



  submit() {
    this.http.post('http://localhost:8084/SpringMVC/registration', this.userform.getRawValue())
      .pipe(map((data) => data))
      .toPromise()
      .then((response) => {
        this.error = false;
        this.router.navigate(['/login'])
      }).catch((error: HttpErrorResponse) => {
        this.error = true;
      })
  }

  }



