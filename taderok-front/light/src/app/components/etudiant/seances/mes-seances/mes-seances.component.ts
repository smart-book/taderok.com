import { Component, OnInit } from '@angular/core';
import {SeanceService} from "../../../../services/prof/seance.service";
import {Seance} from "../../../../models/seance";

@Component({
  selector: 'app-mes-seances',
  templateUrl: './mes-seances.component.html',
  styleUrls: ['./mes-seances.component.sass']
})
export class MesSeancesComponent implements OnInit {

  seancesList : Seance[];
  constructor(private seanceService: SeanceService) { }

  async ngOnInit() {
    this.seancesList = await this.seanceService.afficherSeancesParEtudiant();
    console.log(this.seancesList);
  }

}
