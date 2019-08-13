import { Component, OnInit } from '@angular/core';
import {Reclamation} from "../../../../models/reclamation";
import {GroupesService} from "../../../../services/prof/groupes.service";
import {Groupes} from "../../../../models/groupes";
import {Etudiant} from "../../../../models/etudiant";
import {ListEtudiantsService} from "../../../../services/etudiant/list-etudiants.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.sass']
})
export class AjouterComponentGroupe implements OnInit {
  etudiants : Etudiant = new Etudiant();
  etudiantss : Etudiant[];
  etudiant : Etudiant = new Etudiant();
  groupes : Groupes = new Groupes();


  tabEtudiant : Etudiant[] = [];
  constructor(private groupesService : GroupesService, private listEtudiantsService : ListEtudiantsService, private router: Router) { }

  ngOnInit() {


    this.listEtudiantsService.afficherEtudiants().subscribe(data => {
      console.log(data);
      this.etudiantss = data;
    }, error => console.log(error));

  }
  ajouterEtudiant(){


    this.tabEtudiant.push(this.etudiant);
    this.etudiantss = this.etudiantss.filter(obj => obj !== this.etudiant);


  }
  ajouterGroupe(){
    console.log(this.groupes.nom);

    this.tabEtudiant.push(this.etudiant);
    this.etudiantss = this.etudiantss.filter(obj => obj !== this.etudiant);
    console.log("etuiants");
    console.log(this.tabEtudiant);
    this.groupes.etudiantList=this.tabEtudiant
 this.groupesService.ajouterGroupe(this.groupes).subscribe(data=>console.log(data), error => console.log(error))



  }



}
