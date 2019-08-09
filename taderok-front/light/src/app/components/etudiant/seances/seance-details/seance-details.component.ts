import { Component, OnInit } from '@angular/core';
import {Seance} from "../../../../models/seance";
import {Groupes} from "../../../../models/groupes";
import {User} from "../../../../models/user";
import {ActivatedRoute} from "@angular/router";
import {SeanceService} from "../../../../services/prof/seance.service";
import {GroupesService} from "../../../../services/prof/groupes.service";
import {AppComponent} from "../../../../app.component";
import {Etudiant} from "../../../../models/etudiant";

@Component({
  selector: 'app-seance-details',
  templateUrl: './seance-details.component.html',
  styleUrls: ['./seance-details.component.sass']
})
export class SeanceDetailsComponent implements OnInit {

  idSeance : number;
  idUserConnected : number;
  seance :  Seance = new Seance();
  groupe : Groupes = new Groupes();
  user : User;
  listeEtudiants : Object[] = [];
  statusBouton : string;
  rejoindreBoolean : boolean;
  unknown : unknown;

  constructor(private readonly route: ActivatedRoute, private seanceService : SeanceService, private groupesService : GroupesService,private appComponent: AppComponent,) { }

  async ngOnInit() {
    this.idSeance =+ this.route.snapshot.paramMap.get("id");
    console.log(this.idSeance);

    // get seance async
    this.seance = await this.seanceService.afficherSeanceParIdAsync(this.idSeance);
    console.log(this.seance);

    // here the connectedUSer that i'm getting from appComponent has the type 'typeOf User' not user , so we have to cast it to the type unknown first and then cast it to the type User
    this.unknown = this.appComponent.conntectedUser ;
    this.user = this.unknown as User;
    console.log(this.user);
    this.idUserConnected = this.user.id;
    console.log(this.idUserConnected);

    // listeEtudiants is a list of Objects in which we put the students of the group of this course to compare each one of them with the current user
    this.listeEtudiants = this.seance.groupes.etudiantList;
    console.log(this.listeEtudiants);

    // here we compare each student with the current user to change the button action and name
    this.listeEtudiants.map((etudiant: Etudiant) =>{
      console.log(etudiant);
      if (etudiant.id === this.idUserConnected) {
        this.statusBouton = 'Déjà dans ce groupe';
        this.rejoindreBoolean = false
      } else {
        this.statusBouton = 'Rejoindre';
        this.rejoindreBoolean = true;
      }
    })

  }

  rejoindre(idGroupe){
    this.groupesService.affecterEtudiantAGroupe(idGroupe,this.idUserConnected ).subscribe(
      data => console.log('success'),
      error=> console.log(error));
  }


}
