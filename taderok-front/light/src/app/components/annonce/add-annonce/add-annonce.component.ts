import { Component, OnInit } from '@angular/core';
import {Annonce} from "../../../models/Annonce";
import {DropzoneConfigInterface} from "ngx-dropzone-wrapper";
import {AnnonceServiceService} from "../../../services/annonce/annonce-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.sass']
})
export class AddAnnonceComponent implements OnInit {

  annonce: Annonce = new Annonce();
  public config: DropzoneConfigInterface = {
    url: 'https://example.com/post',    //Change your upload url
    maxFiles: 5,
    clickable: true,
    uploadMultiple: true,
    acceptedFiles: 'image/*',
    createImageThumbnails: true
  };
  constructor(private annonceService: AnnonceServiceService,private router: Router) { }

  ngOnInit() {
  }

  ajouterAnnonce(){
    this.annonceService.ajouterAnnonce(this.annonce).subscribe(data=>{
      console.log(data)
      this.router.navigateByUrl('/annonce/photo/'+data);
    })

  }
}
