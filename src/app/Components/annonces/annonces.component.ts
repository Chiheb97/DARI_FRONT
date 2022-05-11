import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Annonce, Etat, Transaction, Typedebien,   } from 'src/app/Models/annonce';
import { FileDB } from 'src/app/Models/filedb';
import { AnnoncesService } from 'src/app/Services/annonces.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
  
  etats =Object.keys(Etat).filter(key => isNaN(+key));
  typedebiens = Object.keys(Typedebien).filter(key => isNaN(+key));
 
  transactions = Object.keys(Transaction).filter(key => isNaN(+key));
  listannonces : any;
  annonce= new Annonce;

  Form !: FormGroup
  constructor (private annonceService: AnnoncesService , private router: Router ) { 

  }

  ngOnInit(): void {
   this.annonce={
    id : null,
    titre : null,
    description : null,
    images : FileDB,
    prix : null,
    transaction : null   ,
    typedebien : null , 
    etat : null ,
    localisation : null,
    superficie : null,
    nbrchambre : null,
    nbrvue:null,
    age : null,
    etage : null, 
    user_id : null,
    viste_id :null,
   }
 
    this.Form = new FormGroup({
    
    titre :new FormControl(this.annonce.titre, [
      Validators.required,
      Validators.minLength(4),
    ]), 
      description : new FormControl(this.annonce.titre, [
        Validators.required,
        Validators.minLength(10),
      ]),
      images : new FormControl(''),
      prix : new FormControl(this.annonce.titre, [
        Validators.required,
            ]),
      transaction : new FormControl(this.annonce.titre, [
        Validators.required,
            ]),
      typedebien : new FormControl(this.annonce.titre, [
        Validators.required,
            ]),
      etat : new FormControl(this.annonce.titre, [
        Validators.required,
            ]),
      localisation : new FormControl(this.annonce.titre, [
        Validators.required,
            ]),
      superficie : new FormControl(this.annonce.titre, [
        Validators.required,
            ]),
      nbrchambre : new FormControl(this.annonce.titre, [
        Validators.required,
            ]),
      nbrvue: new FormControl(this.annonce.titre, [
        Validators.required,
            ]),
      age : new FormControl(this.annonce.titre, [
        Validators.required,
            ]),
      etage : new FormControl(this.annonce.titre, [
        Validators.required,
            ]), 
     })

  }
 
  public onAdd(): void {
    
    this.annonce=this.Form.value;
    this.annonce.user_id=1;
    console.log('annonce: ', this.annonce);

   this.annonceService.saveAnnonce(this.annonce).subscribe(result => this.gotolist()),
     (error : HttpErrorResponse) => {
    alert(error.message);
  }

}

 
  gotolist() {
    this.router.navigate(['/userannonce']);
  }



}
