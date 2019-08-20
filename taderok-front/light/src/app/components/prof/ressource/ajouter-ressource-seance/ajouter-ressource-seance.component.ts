import { Component, OnInit } from '@angular/core';
import {RessourceService} from '../../../../services/prof/ressource.service';
import {Ressource} from '../../../../models/ressource';


@Component({
  selector: 'app-ajouter-ressource-seance',
  templateUrl: './ajouter-ressource-seance.component.html',
  styleUrls: ['./ajouter-ressource-seance.component.sass']
})
export class AjouterRessourceSeanceComponent implements OnInit {


  selectedFiles: FileList;
  currentFileUpload: File;
  ressource: Ressource = new Ressource();


  constructor(private ressourceService: RessourceService) { }

  ngOnInit() {
  }
  ajouterRessources()
  {
    let fname: string;
    this.currentFileUpload = this.selectedFiles.item(0);
    fname = Math.random().toString(36).substr(2, 11) + '.' + this.currentFileUpload.name.split('.').pop();
    this.selectedFiles = undefined;
    this.ressource.path = fname;
    this.ressource.fileName = this.currentFileUpload.name;
    this.ressourceService.ajouterRessourceHorsSeance(this.ressource).subscribe(data => console.log(data),
      error => console.log(error));
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
