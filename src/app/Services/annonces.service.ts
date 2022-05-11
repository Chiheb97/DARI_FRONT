import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { Annonce } from '../Models/annonce';
import { FileDB } from '../Models/filedb';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {

  readonly API_URL = 'http://localhost:8089/SpringMVC';
  getannonce ='http://localhost:8089/SpringMVC/retreive-annonces-location';

  
  constructor (private httpClient: HttpClient) { }
  listAllAnnonces () {
  return this.httpClient.get(`${this.API_URL}/retreive-annonces`)
  }

  findAllByuser (id : any) {
    return this.httpClient.get(`${this.API_URL}/findAllByuser/${1}`)
   
  }

  saveAnnonce (Annonce : any) {
  return this.httpClient.post(`${this.API_URL}/add-annonce`, Annonce)
  }

  updateAnnonce (Annonce : any, id : any){
  return this.httpClient.put(`${this.API_URL}/update-annonces/${id}`, Annonce)
  }

  deleteAnnonce (id : any) {
  return this.httpClient.delete(`${this.API_URL}/delete-annonces/${id}`)
  }
  
  nombrevue (id : any) {
    return this.httpClient.get(`${this.API_URL}/nbr-vue/${id}`)
    }

   fetchAnnonceList(keyword : any) {
    return this.httpClient.get(`${this.API_URL}/find-annonces/${keyword}`)
    }

   RangeProducts( max : any ) {
    return this.httpClient.get(`${this.API_URL}/range/${max}`)

   }

   

   getAllAnnonce() {
    return this.httpClient.get(`${this.getannonce}`)
  }
  

}
