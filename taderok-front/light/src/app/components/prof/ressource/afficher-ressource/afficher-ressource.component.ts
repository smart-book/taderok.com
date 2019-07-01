import { Component, OnInit } from '@angular/core';
import {Ressource} from '../../../../models/ressource';
import {UploadFileService} from '../../../../services/upload/upload-file.service';
import {RessourceService} from '../../../../services/prof/ressource.service';



@Component({
  selector: 'app-afficher-ressource',
  templateUrl: './afficher-ressource.component.html',
  styleUrls: ['./afficher-ressource.component.sass']
})
export class AfficherRessourceComponent implements OnInit {
uploadRessource: UploadFileService;
  ressource: Ressource = new Ressource();
  listRessources: Ressource[];
  listImage: Ressource[];

  constructor(private ressourceService: RessourceService){}
  ngOnInit() {
    this.afficherRessource();
  }
  afficherRessource() {

    this.ressourceService.afficherRessource().subscribe(data => {
      console.log(data);
      this.listRessources = data;
    }, error => console.log(error));
  }
  afficherImage(){
    this.uploadRessource.getFiles().subscribe(data => {
      console.log(data);
      this.listImage = data;
    }, error => console.log(error));
  }
}
