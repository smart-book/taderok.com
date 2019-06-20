import {Component, Injectable, OnInit} from '@angular/core';
import {ReclamationService} from "../../../../services/prof/reclamation.service";
import {Reclamation} from "../../../../models/reclamation";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.sass']
})
export class AjouterComponent implements OnInit {

  reclamation : Reclamation = new Reclamation();

  constructor(private reclamationService : ReclamationService) { }
  toppings = new FormControl();
  toppingList: string[] = ['Comportement','Contenu','Utilisation','Seances','Profs'];

  ngOnInit() {
    console.log("cfgvhjklm");
  }

  ajouterReclamation(){
    console.log(this.reclamation.description);
    this.reclamationService.ajouterReclamation(this.reclamation).subscribe(data=>console.log(data), error => console.log(error))
  }
}
