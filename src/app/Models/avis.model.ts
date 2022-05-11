
import { Annonce } from "./annonce";
import { User } from "./user.model";

export class Avis {
    id:Number;
    note:Number;
    annonce:Annonce;
    user:User;
}
