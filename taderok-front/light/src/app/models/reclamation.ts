import {User} from "./user";

export class Reclamation{
  id : number;
  date : Date;
  description : string;
  etat : boolean;
  type: string;
  user: User;
}
