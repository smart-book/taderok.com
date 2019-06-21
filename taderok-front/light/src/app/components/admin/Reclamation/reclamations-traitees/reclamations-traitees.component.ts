import { Component, OnInit } from '@angular/core';
import {Reclamation} from "../../../../models/reclamation";
import {ReclamationService} from "../../../../services/Admin/reclamation.service";

@Component({
  selector: 'app-reclamations-traitees',
  templateUrl: './reclamations-traitees.component.html',
  styleUrls: ['./reclamations-traitees.component.sass']
})
export class ReclamationsTraiteesComponent implements OnInit {

  list: Reclamation[];

  constructor(private reclamationService: ReclamationService) {
  }

  ngOnInit() {
    this.reclamationService.afficherReclamationsTraitees().subscribe(data => {
      console.log(data);
      this.list = data;
    }, error => console.log(error));

  }
}
