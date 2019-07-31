import { Component, OnInit } from '@angular/core';
import {AnnonceServiceService} from "../../../services/annonce/annonce-service.service";
import {Annonce} from "../../../models/Annonce";
import {ActivatedRoute, Router} from "@angular/router";
import {AnnoncePhoto} from "../../../models/AnnoncePhoto";
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


  ngOnInit() {

    this.annonceService.getPhotosAnnonce(Number(this.id)).subscribe(data=>{
      console.log(data)
      this.listPhoto=data;
    });



    $('#single_slide').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 450
    });
    $('#single_slide_autoplay').owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    });
    $('.play').on('click', function () {
      $('#single_slide_autoplay').trigger('play.owl.autoplay', [3000])
    });
    $('.stop').on('click', function () {
      $('#single_slide_autoplay').trigger('stop.owl.autoplay')
    });
    $('#withloop').owlCarousel({
      center: true,
      items: 2,
      loop: true,
      margin: 10,
      responsive: {
        600: {
          items: 4
        }
      }
    });
    $('#nonloop').owlCarousel({
      center: true,
      items: 2,
      loop: false,
      margin: 10,
      responsive: {
        600: {
          items: 4
        }
      }
    });
    $('#dashboard_slide').owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      autoplay: false,
      autoplayTimeout: 2000,
      dots: false,
      autoplayHoverPause: true
    });
    $('#dashboard_slide2').owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      dots: false,
      autoplayHoverPause: true
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
