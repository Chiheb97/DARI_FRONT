import { Component, OnInit } from '@angular/core';
import { Annonce, Etat, Transaction, Typedebien } from 'src/app/Models/annonce';
import { AnnoncesService } from 'src/app/Services/annonces.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backannonce',
  templateUrl: './backannonce.component.html',
  styleUrls: ['./backannonce.component.css']
})

export class BackannonceComponent implements OnInit {
  closeResult = '';
  message ='' ;
  
  constructor(private annonceService: AnnoncesService, private modalService: NgbModal, private router: Router) {
  
}
  
  etats =Object.keys(Etat).filter(key => isNaN(+key));
  typedebiens = Object.keys(Typedebien).filter(key => isNaN(+key));
 
  transactions = Object.keys(Transaction).filter(key => isNaN(+key));
   annonce!: Annonce;
  listannonces:any;
  id=1;
  form : boolean = false;

  ngOnInit(): void {
    this.findAllByuser(this.id);

    
    }

    showMessage(){
      Swal.fire({ text: 'Update succefully', icon: 'success'});
    }
   

    findAllByuser(id : any){
    this.annonceService.findAllByuser(id).subscribe(res => this.listannonces  = res)
    }

    public updateAnnonces(annonce : Annonce): void {
      this.annonceService.updateAnnonce(annonce,annonce.id).subscribe();
      console.log(annonce);
    
    }    
   

    public deleteAnnonces(id : any): void {
    this.annonceService.deleteAnnonce(id).subscribe()
   }


 connfirmeMessage(id : any){
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
      this.deleteAnnonces(id)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Proprety has been deleted.',
          showConfirmButton: false,
          timer: 1500
    }).then(function(){ 
      location.reload();
    });
  }})
}

    open(content: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
          return  `with: ${reason}`;
        }
      }
      closeForm(){
    
      }
      cancel(){
        this.form = false;
      }
  
}
