import {Seance} from "./seance";
import {Etudiant} from "./etudiant";

export class Feedback{
  id: number;
  type: string;
  description: string;
  etudiant: Etudiant;
  seances: Seance;
}
export interface Feedback {
  id: number;
  type: string;
  description: string;
  etudiant: Etudiant;
  seances: Seance;
}
