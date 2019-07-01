export class User {
  id: number;
  nom:string;
  prenom:string;
  telephone: number;
  dateNaissance:Date;
  adresse:string;
  photo:string;
  email:string;
  password:string;
  sexe:string;

  photo:string;
  dateNaissance:Date;
  telephone:number;
  enabled:boolean;

  // Etudiant

  niveau:string;
  etablissement:string;
  codeEnfant:string;
  paiement:boolean;


  // Prof

  cin:string;
  diplome:string;
  experience:string;
  code_tablette:string;
  enabled: boolean;
  role:string;
}
