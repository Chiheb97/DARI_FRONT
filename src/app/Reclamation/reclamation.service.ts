import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  readonly API_URL = 'http://localhost:8091/SpringMVC/servlet/reclamation';

  constructor(private HttpClient : HttpClient) { }
  addReclamation(Reclamation : any , id : any){
    return this.HttpClient.post(`${this.API_URL}/add/${id}` , Reclamation,id )
  }
  getusername(){
    return this.HttpClient.get(`${this.API_URL}/getallusername`)
  }
  getannonce(){
    return this.HttpClient.get(`${this.API_URL}/getallannonce`)
  }
  getallreclamation( ){
    return this.HttpClient.get(`${this.API_URL}/getall`)
  }

  addReclamationUser(Reclamation : any ){
    return this.HttpClient.post(`${this.API_URL}/add`,Reclamation )
  }
  editReclamation(Reclamation : any){
    return this.HttpClient.post(`${this.API_URL}/update`,Reclamation )
  }
 deleteReclamation(id : any){
  return this.HttpClient.delete(`${this.API_URL}/delete/${id}`)
 }
}
