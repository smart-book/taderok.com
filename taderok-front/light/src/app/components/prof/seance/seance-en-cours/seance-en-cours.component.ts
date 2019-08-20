import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SeanceService} from "../../../../services/prof/seance.service";
import {Seance} from "../../../../models/seance";

@Component({
  selector: 'app-seance-en-cours',
  templateUrl: './seance-en-cours.component.html',
  styleUrls: ['./seance-en-cours.component.sass']
})
export class SeanceEnCoursComponent implements OnInit {

  idSeance : number;
  seance :  Seance = new Seance();

  constructor(private readonly route: ActivatedRoute,  private seanceService : SeanceService) { }

  async ngOnInit() {
    this.idSeance =+ this.route.snapshot.paramMap.get("id");
    console.log(this.idSeance);

    this.seance = await this.seanceService.afficherSeanceParIdAsync(this.idSeance);
    console.log(this.seance);
  }

}
