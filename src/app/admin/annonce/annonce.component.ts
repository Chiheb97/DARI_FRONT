import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/Models/annonce';
import { AnnonceServiceService } from 'src/app/Services/annonce-service.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  listAnnonce : Annonce[];
  annonce!: Annonce;
  form : boolean = false;
  dataSource: MatTableDataSource<Annonce>;
  displayedColumns = ['image','titre', 'description', 'prix',
   'transaction','typedebien','etat','localisation',
  'superficie','nbrchambre','age','etage'
  ,'numero','datecreation','Option'];
  
  closeResult! : string;
  counters = [100, 200, 10];
  meilleurDestination:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private annonceService:AnnonceServiceService, private router:Router) { }

  ngOnInit(): void {
    

this.annonceService.getAllAnnonce().subscribe(
  data=> {
    console.log(data)
        this.listAnnonce=data;
        this.dataSource = new MatTableDataSource(this.listAnnonce);
        this.dataSource._renderChangesSubscription;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
  );

  }

  navigateToComment(id:any){
    console.log(id)
    this.router.navigate(['/admin/annonce',id])
    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


}
