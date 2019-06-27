import { Component, OnInit } from '@angular/core';
import {Seance} from "../../../../models/seance";
import {GroupesService} from "../../../../services/prof/groupes.service";
import {SeanceService} from "../../../../services/prof/seance.service";
import { FormBuilder, Validators } from "@angular/forms";
declare const $: any;
declare const Dropzone: any;
@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.sass']
})
export class AjouterComponentSeance implements OnInit {

  seance : Seance = new Seance();



  constructor(private seanceService : SeanceService,public fb: FormBuilder) { }

  ngOnInit() {
    console.log("seance");
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
