import { Component, OnInit } from '@angular/core';
import {Reclamation} from "../../../../models/reclamation";
import {GroupesService} from "../../../../services/prof/groupes.service";
import {Groupes} from "../../../../models/groupes";

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.sass']
})
export class AjouterComponentGroupe implements OnInit {
  groupes : Groupes = new Groupes();

  constructor(private groupesService : GroupesService) { }
c
  ngOnInit() {
    console.log("zayneb");
  }
  ajouterGroupe(){
    console.log(this.groupes.nom);
    this.groupesService.ajouterGroupe(this.groupes).subscribe(data=>console.log(data), error => console.log(error))
  }
}
