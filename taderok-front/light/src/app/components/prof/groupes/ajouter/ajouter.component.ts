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
  groupees : Groupes[];
  groupe : Groupes = new Groupes();


  tabGroup : Groupes[] = [];
  constructor(private groupesService : GroupesService) { }

  ngOnInit() {


    this.groupesService.afficherGroupe().subscribe(data => {
      console.log(data);
      this.groupees = data;
    }, error => console.log(error));

  }

  ajouterGroupe(){
    console.log(this.groupe.nom);
   // this.groupesService.ajouterGroupe(this.groupes).subscribe(data=>console.log(data), error => console.log(error))

    this.tabGroup.push(this.groupe);
    this.groupees = this.groupees.filter(obj => obj !== this.groupe);

  }


}
