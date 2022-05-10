import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user/user-service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  userform !: FormGroup;
  userserv !: UserService;
  user: any;
  constructor() { }

  ngOnInit(): void {

    this.userform = new FormGroup({
      username: new FormControl(),
      role: new FormControl(),
      num: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      favoris: new FormControl(),
      enabled: new FormControl(),
      locked: new FormControl(),


    });
  }
  getUser(id: any) {
    this.userserv.getUser(id).subscribe(res => this.user=res);
  }
  submit() { };

}
