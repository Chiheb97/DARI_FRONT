import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';
import { User } from '../user'
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-comp',
  templateUrl: './user-comp.component.html',
  styleUrls: ['./user-comp.component.css']
})
export class UserCompComponent implements OnInit {
  listUser: any;
  form: boolean = false;
  closeResult!: string;
  user = JSON.parse(localStorage.getItem('user'));
  token = localStorage.getItem('token');
  role: any;  loginuser: boolean;
  loginadmin: boolean;


  constructor(private us: UserService, private router: Router, private _router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllUser();
    this.user = {
      id: null,
      email: null,
      enabled: null,
      favoris: null,
      locked: null,
      num: null,
      password: null,
      role: null,
      username: null,

    }


  }





  getAllUser() {
    this.us.getAllUser().subscribe(res => this.listUser = res)
  }
  deleteUser(id: any) {
    this.us.deleteUser(id).subscribe(() => this.getAllUser())
  }
  edit(user: User) {
    console.log(user)
    this.us.editUser(user).subscribe()
  }


  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  closeForm() {

  }
  cancel() {
    this.form = false;
  }





  connfirmeMessage(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteUser(id)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Proprety has been deleted.',
          showConfirmButton: false,
          timer: 1500
        }).then(function () {
          location.reload();
        });
      }
    })
  }
}

 
