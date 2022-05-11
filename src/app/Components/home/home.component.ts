import { Component, OnInit } from '@angular/core';
import { Annonce, Transaction, Typedebien } from 'src/app/Models/annonce';
import { AnnoncesService } from 'src/app/Services/annonces.service';
import { Options } from '@angular-slider/ngx-slider';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  transactions = Object.keys(Transaction).filter(key => isNaN(+key));
  typedebiens = Object.keys(Typedebien).filter(key => isNaN(+key));

  listannonces : any;
  annonce!: Annonce;
  constructor (private annonceService: AnnoncesService) { }
  
  ngOnInit(): void {
  this.listAllAnnonces();
  
  }

  listAllAnnonces(){
  this.annonceService.listAllAnnonces().subscribe(res => this.listannonces  = res)
  }

  nombrevue(annonce : Annonce) {
    this.annonceService.nombrevue(annonce.id).subscribe();
    console.log(annonce)
    window.location.reload();
    }

    keyword : any
  fetchAnnonceList(keyword : any){
    console.log(keyword)
    this.annonceService.fetchAnnonceList(keyword).subscribe(res => this.listannonces  = res)
    }

    prix : any
    range(prix : any){
      console.log(prix)
      this.annonceService.RangeProducts(prix).subscribe(res => this.listannonces  = res)
      }
  
    value1: number = 300;
    options1: Options = {
      floor: 100,
      ceil: 900
    };


    value2: number = 500;
    options2: Options = {
      floor: 100,
      ceil: 10000
    };
    
}
