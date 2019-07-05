import { Component, OnInit } from '@angular/core';
import {Ressource} from '../../../../models/ressource';
import {RessourceService} from '../../../../services/prof/ressource.service';
import {UploadFileService} from '../../../../services/upload/upload-file.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-ajouter-ressource',
  templateUrl: './ajouter-ressource.component.html',
  styleUrls: ['./ajouter-ressource.component.sass']
})
export class AjouterRessourceComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  ressource: Ressource = new Ressource();



  constructor(private ressourceService: RessourceService, private uploadService: UploadFileService) {}

  ngOnInit() {
  }


  ajouterRessources() {

    this.progress.percentage = 0;
    // tslint:disable-next-line:prefer-const
    let fname: string;
    this.currentFileUpload = this.selectedFiles.item(0);
    fname = Math.random().toString(36).substr(2, 11) + '.' + this.currentFileUpload.name.split('.').pop();
    this.uploadService.pushFileToStorage(this.currentFileUpload, fname).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
    this.ressource.path = fname;
    this.ressource.fileName = this.currentFileUpload.name;
    this.ressourceService.ajouterRessource(this.ressource, 2).subscribe(data => console.log(data), error => console.log(error));
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }



}
