import {User} from "./user";

export class Annonce {
  id: number;
  titre: string;
  date: Date;
  description: string;
  categorie: string;
  prix: number;
  user: User;
  archive:boolean;
  valide :boolean;
  photo :string;
}
