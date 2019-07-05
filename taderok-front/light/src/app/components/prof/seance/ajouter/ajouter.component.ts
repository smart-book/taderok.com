import { Component, OnInit } from '@angular/core';
import {Seance} from "../../../../models/seance";
import {GroupesService} from "../../../../services/prof/groupes.service";
import {SeanceService} from "../../../../services/prof/seance.service";
import { FormBuilder, Validators } from "@angular/forms";
import {Groupes} from "../../../../models/groupes";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
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



  constructor(private seanceService : SeanceService,public fb: FormBuilder,private groupesService : GroupesService, private router: Router) { }
  user : any;
  ngOnInit() {
    console.log("seance");

      this.user = JSON.parse(localStorage.getItem('user'));
      console.log(this.user.user.id);

    this.groupesService.afficherGroupe().subscribe(data => {
      console.log(data);
      this.groupees = data;
    }, error => console.log(error));
  }

  afficherSeance()
  {
    /*this.reclamationService.AfficherReclamationUser().subscribe(data => {
      console.log(data);
      this.list = data;
    }, error => console.log(error));
     */
    this.router.navigate(['/components/prof/seance/list']);
    window.location.reload();
  }
  ajouterSeance(){
    console.log(this.seance.date_debut);



    this.seanceService.ajouterSeance(this.seance).subscribe(data=>{console.log(data);
      $.notify("Access granted", "success");
      /*Swal.fire(
        'Succes!',
        'Votre seance a été ajoutée!',
        'success'
      )*/
    }, error => {console.log(error);
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Veuillez remplir à nouveau les informations de la seance!',
      });
    })
  }


  registrationForm = this.fb.group({
    cityName: ['zayneb']
  })
  onSubmit() {
    alert(JSON.stringify(this.registrationForm.value))
  }


}
