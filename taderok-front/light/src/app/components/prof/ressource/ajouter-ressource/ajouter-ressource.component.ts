import { Component, OnInit } from '@angular/core';
import {Ressource} from '../../../../models/ressource';
import {RessourceService} from '../../../../services/prof/ressource.service';

@Component({
  selector: 'app-ajouter-ressource',
  templateUrl: './ajouter-ressource.component.html',
  styleUrls: ['./ajouter-ressource.component.sass']
})
export class AjouterRessourceComponent implements OnInit {
  ressource : Ressource = new Ressource();
  constructor(private ressourceService: RessourceService){}

  ngOnInit(){
  }
  ajouterRessources(){

    this.ressourceService.ajouterRessource(this.ressource,1).subscribe(data => console.log(data), error => console.log(error))
  }
}
