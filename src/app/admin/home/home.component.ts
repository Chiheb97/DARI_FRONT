import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Login: boolean;
  public Logout: boolean;
  user = JSON.parse(localStorage.getItem('user'));
  token = localStorage.getItem('token');
  role: any;
  constructor(private router: Router) { }
  

  ngOnInit(): void {
    this.role = this.user.role;

    if (this.user.role == "User") {
      this.Login = false;
    }

    


    if (this.token == null || this.user.role == null) {
      this.Login = false;
    } else {
      this.Login = true;

    }

  } 
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']).then(() => {
      location.reload();
    })
  }
}
