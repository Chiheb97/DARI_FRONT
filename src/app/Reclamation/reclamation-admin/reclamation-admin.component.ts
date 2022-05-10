import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReclamationService } from '../reclamation.service';
import { Reclamation } from '../reclamation';
@Component({
  selector: 'app-reclamation-admin',
  templateUrl: './reclamation-admin.component.html',
  styleUrls: ['./reclamation-admin.component.css']
})
export class ReclamationAdminComponent implements OnInit {

  constructor(  private ReclamationService: ReclamationService) { }

  listreclam : any; 


  ngOnInit(): void {
    this.getAllreclam()
  }


  getAllreclam(){
    this.ReclamationService.getallreclamation().subscribe(res => this.listreclam = res)
  }

  deletereclamation(id : any){
    this.ReclamationService.deleteReclamation(id).subscribe(() => this.getAllreclam())
  }
  
  
}
