import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {
  readonly API_URL = 'http://localhost:8091/SpringMVC/servlet/abonnement';

  constructor(private HttpClient : HttpClient) { }
  addAbonnement_client(  id : any){
    return this.HttpClient.post(`${this.API_URL}/abonnement_user/${id}`,id )
  }
  getallabonnement(){
    return this.HttpClient.get(`${this.API_URL}/getall`)
  }
  addAbonnement(abonnement : any) {
    return this.HttpClient.post(`${this.API_URL}/add`, abonnement)
  }
  editAbonnement(abonnement : any){
    return this.HttpClient.put(`${this.API_URL}/update`, abonnement)
  }
  deleteAbonnement(id : any){
    return  this.HttpClient.delete(`${this.API_URL}/delete/${id}`)
  }
}
