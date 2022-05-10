import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user/user-service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  captcha: string;
  public loading: boolean = false;
  public error: boolean = false;
  form!: FormGroup;
  constructor(private UserHttp: UserService, private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  resolved(catptchaResponse: string) {
    this.captcha = catptchaResponse;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required])
    });
  }
  submit(): void {
    this.UserHttp.forgetpassword(this.form.get(['email']).value).subscribe();
    this.router.navigate(['/login']);
  }


}
