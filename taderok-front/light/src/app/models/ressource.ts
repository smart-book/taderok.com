import {Seance} from './seance';
import {Prof} from './prof';

export class Ressource {
  id: number;
  fileName: string;
  nom: string;
  path: string;
  etat: boolean;
  date: Date;
  prof: Prof;
  seance: Seance;
}
