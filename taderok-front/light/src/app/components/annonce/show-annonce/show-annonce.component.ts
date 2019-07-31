import { Component, OnInit } from '@angular/core';
import {AnnonceServiceService} from "../../../services/annonce/annonce-service.service";
import {Annonce} from "../../../models/Annonce";
import {ActivatedRoute, Router} from "@angular/router";
import {AnnoncePhoto} from "../../../models/AnnoncePhoto";
import { OwlOptions } from 'ngx-owl-carousel-o';

declare const $: any;

@Component({
  selector: 'app-show-annonce',
  templateUrl: './show-annonce.component.html',
  styleUrls: ['./show-annonce.component.sass']
})
export class ShowAnnonceComponent implements OnInit {

  constructor(private annonceService: AnnonceServiceService,private router: Router,private route: ActivatedRoute) { }

  annonce: Annonce=new Annonce();
  listPhoto : AnnoncePhoto[];
  id=this.route.snapshot.paramMap.get("id");
  imageTalbe: string;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  ngOnInit() {

    this.annonceService.getPhotosAnnonce(Number(this.id)).subscribe(data=>{
      console.log(data)
      this.listPhoto=data;
    });




    this.annonceService.getAnnonce(Number(this.id)).subscribe(data=>{
      console.log(data)
      this.annonce=data;
    });

    this.annonceService.getPhotosAnnonce(Number(this.id)).subscribe(data=>{
      console.log(data)
      this.listPhoto=data;
    });
  }

}
