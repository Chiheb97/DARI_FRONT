import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../user';


@Component({

  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userform !: FormGroup;
  constructor(private us: UserService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.userform = new FormGroup({
      username: new FormControl(),
      role: new FormControl(),
      num: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      favoris: new FormControl(),
      enabled: new FormControl(false),
      locked: new FormControl(false),


    });

  }
 
  
  
  submit() {

    this.us.addUser(this.userform.value).subscribe()
    alert('SUCCESS!!');
    this.router.navigate(['/user'])

    
  }
  
  
  
}
