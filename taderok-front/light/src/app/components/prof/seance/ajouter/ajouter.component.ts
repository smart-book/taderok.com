import { Component, OnInit } from '@angular/core';
import {Seance} from "../../../../models/seance";
import {GroupesService} from "../../../../services/prof/groupes.service";
import {SeanceService} from "../../../../services/prof/seance.service";
import { FormBuilder, Validators } from "@angular/forms";
import {Groupes} from "../../../../models/groupes";
declare const $: any;
declare const Dropzone: any;
@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.sass']
})
export class AjouterComponentSeance implements OnInit {
  groupes : Groupes = new Groupes();
  groupees : Groupes[];
  groupe : Groupes = new Groupes();
  seance : Seance = new Seance();



  constructor(private seanceService : SeanceService,public fb: FormBuilder,private groupesService : GroupesService) { }

  ngOnInit() {
    console.log("seance");


    this.groupesService.afficherGroupe().subscribe(data => {
      console.log(data);
      this.groupees = data;
    }, error => console.log(error));
  }
  ajouterSeance(){
    console.log(this.seance.date_debut);
    this.seanceService.ajouterSeance(this.seance).subscribe(data=>console.log(data), error => console.log(error))
  }


  registrationForm = this.fb.group({
    cityName: ['zayneb']
  })
  onSubmit() {
    alert(JSON.stringify(this.registrationForm.value))
  }


}
