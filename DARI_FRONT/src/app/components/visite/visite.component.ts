import { Visite } from './../../entities/visite';
import { VisiteService } from './../../services/visite.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators  } from '@angular/forms';
@Component({
  selector: 'app-visite',
  templateUrl: './visite.component.html',
  styleUrls: ['./visite.component.css']
})
export class VisiteComponent implements OnInit {

  constructor(private visiteService: VisiteService) { }

  visite : Visite = new Visite();
  vis : Visite = new Visite();
  vis2 : Visite[] = [];
  DemandeForm = new FormGroup({
    date: new FormControl(''),
    title: new FormControl(''),
  });

  ngOnInit(): void {
    this.visite ={
      id : null,
      annonce : null,
      title : null,
      dateVisite : null,
      client : null
    }
  }

getAllVisites(){

    this.visiteService.getAll().subscribe(res => this.vis2 = res)
  }




  Create()
  {
   this.visite = this.DemandeForm.value;

   this.visiteService.create(this.visite).subscribe(() => this.getAllVisites())
   this.DemandeForm.reset();

  }
}
