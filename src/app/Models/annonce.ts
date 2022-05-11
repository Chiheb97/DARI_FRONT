import { User } from "./user";
import { FileDB } from "./filedb"
import { Avis } from "./avis.model";
import { Commentaire } from "./commentaire.model";


export class Annonce {
    id : any ;
    titre : any ;
    description : any ;
    prix : any ;
    transaction : any  ;
    typedebien : any ; 
    etat : any ;
    localisation : any  ;
    superficie : any  ;
    nbrchambre : any  ; 
    age : any ;
    numero : any ;
    datecreation : any ;
    files!:FileDB;
    avis !: Avis[];
    commaentaire! :Commentaire[];
    nbrvue : any;
    etage! : any ;
    user_id: User["id"];
    viste_id : any
}
export enum Transaction
{
    Buy=" Vente", 
	Rent =" location",
	holiday  =" location_vacances "

}


export enum Etat
{
    Renew ="a_renouvler" ,
    Good = "bon_etat", 
    New =" neuf "
 
}

export enum Typedebien
{ Apartment ="Appartement" ,
Villa ="Villa", 
office ="bureau", 
studio="studio" ,
ground="terrain"

}