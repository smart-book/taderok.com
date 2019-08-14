import { Component, OnInit } from '@angular/core';
import {SeanceService} from "../../../../services/prof/seance.service";
import {Seance} from "../../../../models/seance";

@Component({
  selector: 'app-mes-seances',
  templateUrl: './mes-seances.component.html',
  styleUrls: ['./mes-seances.component.sass']
})
export class MesSeancesComponent implements OnInit {

  seanceList : Seance[];
  constructor(private seanceService: SeanceService) { }

  async ngOnInit() {
    this.seanceList =await this.seanceService.afficherSeancesParProf();
    console.log(this.seanceList);
  }

}
