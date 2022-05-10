import { Component, OnInit } from '@angular/core';
import { Abonnement } from '../abonnement';
import { AbonnementService } from '../abonnement.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-abonnoment-admin',
  templateUrl: './abonnoment-admin.component.html',
  styleUrls: ['./abonnoment-admin.component.css']
})
export class AbonnomentAdminComponent implements OnInit {
  listabonnement: any;
  abonnement!: Abonnement;
  form : boolean = false;
  closeResult! : string;
  constructor(private abonnementService: AbonnementService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAll();
    this.abonnement = {
      id: null,
      description: null,
      name: null,
      prix: null,
    }
  }
  getAll(){
    this.abonnementService.getallabonnement().subscribe(res => this.listabonnement = res)
  }
  addabonnement(abonnement: any){
    this.abonnementService.addAbonnement(abonnement).subscribe(() => {
      this.getAll();
      this.form = false;
    });
  }
  editabonnement(abonnement : any){
    this.abonnementService.editAbonnement(abonnement).subscribe();
  }
  deleteabonnement(id : any){
    this.abonnementService.deleteAbonnement(id).subscribe(() => this.getAll())
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
