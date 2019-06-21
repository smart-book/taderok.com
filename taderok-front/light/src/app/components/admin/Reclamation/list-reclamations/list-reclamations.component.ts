import {Component, OnInit} from '@angular/core';
import {ReclamationService} from "../../../../services/Admin/reclamation.service";
import {Reclamation} from "../../../../models/reclamation";

@Component({
  selector: 'app-list-reclamations',
  templateUrl: './list-reclamations.component.html',
  styleUrls: ['./list-reclamations.component.sass']
})
export class ListReclamationsComponent implements OnInit {

  list: Reclamation[];

  constructor(private reclamationService: ReclamationService) {

  }

  ngOnInit() {

    this.reclamationService.afficherReclamations().subscribe(data => {
      console.log(data);
      this.list = data;
    }, error => console.log(error));
  }

}
