import * as G from "glob";
import {Groupes} from "./groupes";
import {Prof} from "./prof";

export class Seance{
  id : number;
  date_debut : Date;
  date_fin : Date;
  duree: number;
  matiere : string;
  titre : string;
  description : string;
  etat : string;
  groupes: Groupes;
  prof: Prof
}
