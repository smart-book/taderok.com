import { Component, OnInit } from '@angular/core';
import {DropzoneConfigInterface} from "ngx-dropzone-wrapper";
import {UploadFileService} from "../../../services/upload/upload-file.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {AnnonceServiceService} from "../../../services/annonce/annonce-service.service";
import {AnnoncePhoto} from "../../../models/AnnoncePhoto";
import {DemandeAmisService} from "../../../services/user/demande-amis.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Annonce} from "../../../models/Annonce";

@Component({
  selector: 'app-photos-annonce',
  templateUrl: './photos-annonce.component.html',
  styleUrls: ['./photos-annonce.component.css']
})
export class PhotosAnnonceComponent implements OnInit {

  constructor(private router: Router,private annonceService: AnnonceServiceService,private uploadService: UploadFileService,private route: ActivatedRoute) { }
  filess: any = [];
  private a: AnnoncePhoto=new AnnoncePhoto();
  aa: Annonce=new Annonce();
  id=this.route.snapshot.paramMap.get("id");
  onFilesAdded(files: File[]) {
    console.log(files);

    files.forEach(file => {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent) => {
        const content = (e.target as FileReader).result;

        // this content string could be used directly as an image source
        // or be uploaded to a webserver via HTTP request.
        console.log(content);
      };

      // use this for basic text files like .txt or .csv
      reader.readAsText(file);

      // use this for images
      // reader.readAsDataURL(file);
    });
    this.filess=files
  }

  onFilesRejected(files: File[]) {
    console.log(files);
  }

  ajouterPhotos(){
    // tslint:disable-next-line:prefer-const
    this.filess.forEach(file => {
      console.log(this.filess.length)
      let fname: string;
      fname = Math.random().toString(36).substr(2, 11) + '.' + file.name.split('.').pop();

      this.uploadService.pushFileToStoragePhotoAnnonce(file, fname).subscribe(data=>{
        console.log(data)
      });
      this.a.annonce=this.aa;
      this.a.path=fname;
      this.annonceService.ajouterPhotoAnnonce(Number(this.id), this.a).subscribe(data=>{
        console.log(data)
      });
    });
    this.router.navigateByUrl('/annonce/show/'+this.id)

  }
  sout(){
    console.log(this.filess)
  }
  ngOnInit() {
    console.log(Number(this.route.snapshot.paramMap.get("id")))
    this.annonceService.getAnnonce(Number(this.route.snapshot.paramMap.get("id"))).subscribe(data=>{
      console.log(data)
      this.aa=data;
    });
  }

}
