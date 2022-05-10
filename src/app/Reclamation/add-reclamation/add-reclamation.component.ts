import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReclamationService } from '../reclamation.service';
import { Reclamation } from '../reclamation';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {
  reclamationForm :FormGroup;
  public reclamation = new Reclamation();
  constructor(private ReclamationService: ReclamationService, private router: Router) { }
  listusername:any;
  listannonce : any;

  ngOnInit(): void {
    this.getallannonce();
    this.getAllusername();
    this.reclamationForm =new FormGroup({
      id: new FormControl(),
      titre :new FormControl() ,
      description:new FormControl(),
      reclam_user :new FormControl(null),
      annonce_id :new FormControl()
    });
  }
  getAllusername(){
    this.ReclamationService.getusername().subscribe(res=>this.listusername=res);
 }
 getallannonce(){
   this.ReclamationService.getannonce().subscribe(res=>this.listannonce=res)
 }  

   soumettre(){
    this.reclamation.description=this.reclamationForm.get("description")?.value;
    this.reclamation.titre=this.reclamationForm.get("titre")?.value;
    this.reclamation.reclam_user=this.reclamationForm.get("reclam_user")?.value;
  if(this.reclamationForm.get("annonce_id")?.value!=null){
   this.ReclamationService.addReclamation(this.reclamation,this.reclamationForm.get("annonce_id")?.value).subscribe() ;
  }
  else{
   this.ReclamationService.addReclamationUser(this.reclamation).subscribe() ;
  }
 // this.router.navigate(['/home'])
}
}
