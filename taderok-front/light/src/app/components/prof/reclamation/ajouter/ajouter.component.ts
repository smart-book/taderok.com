import {Component, Injectable, OnInit} from '@angular/core';
import {ReclamationService} from "../../../../services/prof/reclamation.service";
import {Reclamation} from "../../../../models/reclamation";
import {FormBuilder, FormControl} from "@angular/forms";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
declare const $: any;


@Component({
  selector: 'app-ajouter-reclamation',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.sass']
})
export class AjouterComponent implements OnInit {

  list: Reclamation[];

   reclamationTypeSelected: string;

  reclamation : Reclamation = new Reclamation();


  constructor(private reclamationService : ReclamationService,public fb: FormBuilder, private router: Router) { }
  toppings = new FormControl();
  toppingList: string[] = ['Comportement','Contenu','Utilisation','Seances','Profs'];

  user: any;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user.user.id);
  }


  afficherReclamtion()
  {
    this.router.navigate(['/components/lister']);
    window.location.reload();
  }

  ajouterReclamation(){
    console.log(this.reclamationTypeSelected);
    this.reclamation.type = this.reclamationTypeSelected;
    this.reclamationService.ajouterReclamation(this.reclamation).subscribe(data=>{console.log(data);
      $.notify("Access granted", "success");
      /*Swal.fire(
        'Succes!',
        'Votre réclamation a été ajoutée!',
        'success'
      )*/
      }, error => {console.log(error);
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Veuillez remplir à nouveau votre réclamation!',
      });
    })
  }



}
