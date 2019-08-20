import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SeanceService} from "../../../../services/prof/seance.service";
import {Seance} from "../../../../models/seance";
import {GroupesService} from "../../../../services/prof/groupes.service";
import {Groupes} from "../../../../models/groupes";
import {User} from "../../../../models/user";
import {Etudiant} from "../../../../models/etudiant";
import {AppComponent} from "../../../../app.component";

@Component({
  selector: 'app-seance-details',
  templateUrl: './seance-details.component.html',
  styleUrls: ['./seance-details.component.sass']
})
export class SeanceDetailsComponent implements OnInit {

  idSeance : number;
  idUserConnected : number;
  seance :  Seance = new Seance();
  seanceModifiee :  Seance = new Seance();
  user : User;
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
  }

  /*async */modifierSeance() {
    console.log(this.seance



    )
    this.seanceService.modifierSeance(this.seance, this.seance.id).subscribe(data=> console.log(data),
      error1 => console.log(error1))
    //await this.seanceService.modifierSeanceAsync(this.seance, id);
  }


}
