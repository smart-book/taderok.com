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
  currentSeance: Seance;

  makeRandom(lengthOfCode: number, possible: string) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;*&^%$#@!~`";

  result: string = this.makeRandom(20, this.possible);
  constructor(private seanceService: SeanceService) { }

  async ngOnInit() {
    this.seanceList =await this.seanceService.afficherSeancesParEtudiant();
    console.log(this.seanceList);
    console.log(this.result);
    setTimeout(()=>{
      this.seanceList.map(seance=>{
        let now = new Date();
        if(new Date(seance.date_debut).getDay() === now.getDay() &&
          new Date(seance.date_debut).getHours() <= now.getHours() &&
          new Date(seance.date_debut).getHours() >= now.getHours()-1
        ) {
          console.log(new Date(seance.date_debut));
          console.log(new Date(seance.date_debut).getHours());
          this.currentSeance = seance;
          console.log(this.currentSeance);
        }
      })
    }, 10)
  }

}
