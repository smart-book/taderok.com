import * as G from "glob";
import {Groupes} from "./groupes";

export class Seance{
  id : number;
  date_debut : Date;
  date_fin : Date;
  duree: number;
  matiere : string;
  groupes: Groupes;


}
