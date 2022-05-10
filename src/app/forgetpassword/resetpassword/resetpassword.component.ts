import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../user/user-service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  public error: boolean = false;
  form!: FormGroup;
  constructor(private UserHttp: UserService, private route: ActivatedRoute, private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {


    this.form = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],
    });
  }
  submit(): void {
    this.UserHttp.resetpassword(this.route.snapshot.params['email'], this.route.snapshot.params['token'], this.form.get(['password']).value).subscribe();
    this.router.navigate(['/login']);
  }

}
