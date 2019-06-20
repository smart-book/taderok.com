import {Component, Injectable, OnInit} from '@angular/core';
import {ReclamationService} from "../../../../services/prof/reclamation.service";
import {Reclamation} from "../../../../models/reclamation";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.sass']
})
export class AjouterComponent implements OnInit {

  reclamation : Reclamation = new Reclamation();
  formAutocomplete : FormGroup;

  constructor(private reclamationService : ReclamationService , private formBuilder : FormBuilder) { }

  ngOnInit() {
    console.log("cfgvhjklm");
    this.formAutocomplete = this.formBuilder.group(
      {autoCompleteCtrl : [],}
    );
  }
  myControl = new FormControl();
  options: string[] = ['Comportement','Contenu','Utilisation','Seances','Profs'];
  ajouterReclamation()
  {
    console.log(this.reclamation.description);
    this.reclamationService.ajouterReclamation(this.reclamation).subscribe(data=>console.log(data), error => console.log(error))
  }
}
