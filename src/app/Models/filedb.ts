import { Annonce } from "./annonce";

export class FileDB {
    id!:number;
    name!:String ;
    type!:String ;
    data!:Int32Array[] ;
    annonce !:Annonce  ;

}
