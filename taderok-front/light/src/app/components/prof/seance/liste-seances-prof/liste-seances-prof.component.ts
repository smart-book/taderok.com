import { Component, OnInit } from '@angular/core';
import {SeanceService} from "../../../../services/prof/seance.service";
import {Seance} from "../../../../models/seance";

@Component({
  selector: 'app-liste-seances-prof',
  templateUrl: './liste-seances-prof.component.html',
  styleUrls: ['./liste-seances-prof.component.sass']
})
export class ListeSeancesProfComponent implements OnInit {

  listeSeance: Seance[];
  constructor(private seanceService: SeanceService) { }

  ngOnInit() {
    this.seanceService.afficherSeance().subscribe(data => {
      console.log(data);
      this.listeSeance = data;
    }, error => console.log(error));
  }

}
