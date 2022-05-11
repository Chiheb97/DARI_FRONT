import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Commentaire } from 'src/app/Models/commentaire.model';
import { CommentaireServiceService } from 'src/app/Services/commentaire-service.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {

  listcommentaire:Commentaire [];
  list:any;
  id:Number;
  form : boolean = false;
  dataSource: MatTableDataSource<Commentaire>;
  displayedColumns = ['User','Commentaire','Option'];
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private commentaireService:CommentaireServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
this.getAll()

    this.id=new Number(this.route.snapshot.paramMap.get('id'));
this.commentaireService.getcommentairebyannonce(this.id).subscribe(data=> {
  this.listcommentaire=data;
  this.dataSource = new MatTableDataSource(this.listcommentaire);
  // console.log(this.listcommentaire);
  

})
  }


  supprimer(commentaire :any){
    this.commentaireService.deletecommentaire(commentaire.id).subscribe(()=>this.list
     
    );
  }


  getAll(){
    this.commentaireService.getcommentairebyannonce(this.id).subscribe( res => this.list = res)
  }

}
