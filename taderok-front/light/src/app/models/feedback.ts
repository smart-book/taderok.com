import {User} from "./user";
import {Seance} from "./seance";
import {Etudiant} from "./etudiant";

export class Feedback{
  id: number;
  type: string;
  description: string;
  user:User;
  etudiant: Etudiant;
  seances: Seance;
}
