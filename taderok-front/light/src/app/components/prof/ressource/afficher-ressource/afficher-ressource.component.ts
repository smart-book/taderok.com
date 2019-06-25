import { Component, OnInit } from '@angular/core';
import {Ressource} from "../../../../models/ressource";
import {RessourceService} from "../../../../services/prof/ressource.service";

@Component({
  selector: 'app-afficher-ressource',
  templateUrl: './afficher-ressource.component.html',
  styleUrls: ['./afficher-ressource.component.sass']
})
export class AfficherRessourceComponent implements OnInit {

  ressource: Ressource = new Ressource();
  listRessources: Ressource[];
  constructor(private ressourceService: RessourceService){}
  ngOnInit() {
    this.afficherRessource();
  }
  afficherRessource() {

    this.ressourceService.afficherRessource().subscribe(data => {
      console.log(data);
      this.listRessources = data;
    }, error => console.log(error));
  }
}
