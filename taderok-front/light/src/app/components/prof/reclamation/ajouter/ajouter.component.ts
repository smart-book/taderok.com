import {Component, Injectable, OnInit} from '@angular/core';
import {ReclamationService} from "../../../../services/prof/reclamation.service";
import {Reclamation} from "../../../../models/reclamation";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.sass']
})
export class AjouterComponent implements OnInit {

  reclamation : Reclamation = new Reclamation();
  reclamationTypeSelected: string;
  reclamationForm: FormGroup;
  submitted = false;

  constructor(private reclamationService : ReclamationService,private formBuilder: FormBuilder) { }
  toppings = new FormControl();
  toppingList: string[] = ['Comportement','Contenu','Utilisation','Seances','Profs'];

  user: any;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user.user.id);
    this.reclamationForm = this.formBuilder.group({
      description: ['', Validators.required]
    });
    // this.user = JSON.parse(localStorage.getItem('user'));
   // console.log(this.user.user.id);
  }
  // convenience getter for easy access to form fields
  get f() { return this.reclamationForm.controls; }

  ajouterReclamation(){
    console.log(this.reclamationTypeSelected);
    this.reclamation.type = this.reclamationTypeSelected;
    this.reclamationService.ajouterReclamation(this.reclamation).subscribe(data=>{console.log(data);
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )}, error => {console.log(error);
      Swal.fire({
        imageUrl: 'https://placeholder.pics/svg/300x1500',
        imageHeight: 1500,
        imageAlt: 'A tall image'
      })})
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.reclamationForm.invalid) {
      Swal.fire({
        imageUrl: 'https://placeholder.pics/svg/300x1500',
        imageHeight: 1500,
        imageAlt: 'A tall image'
      });
    }

    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )  }

}
