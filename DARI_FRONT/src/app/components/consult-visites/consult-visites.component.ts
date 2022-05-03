import { VisiteService } from './../../services/visite.service';
import { Component, OnInit } from '@angular/core';
import { Visite } from 'src/app/entities/visite';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-consult-visites',
  templateUrl: './consult-visites.component.html',
  styleUrls: ['./consult-visites.component.css']
})
export class ConsultVisitesComponent implements OnInit {


  vis : Visite[] = [];
  constructor(private visiteService : VisiteService) { }

  ngOnInit(): void {

    this.getAllVisites();

  }

   getAllVisites(){

    this.visiteService.getAll().subscribe(res => this.vis = res);

  }


}
