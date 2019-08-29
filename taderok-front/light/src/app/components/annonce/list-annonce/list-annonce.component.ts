import { Component, OnInit } from '@angular/core';
import {AnnonceServiceService} from "../../../services/annonce/annonce-service.service";
import {Annonce} from "../../../models/Annonce";
import {AnnoncePhoto} from "../../../models/AnnoncePhoto";
declare const $: any;

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrls: ['./list-annonce.component.sass']
})
export class ListAnnonceComponent implements OnInit {

  ListAnnonce : Annonce[];
  ListPhotoAnnonce : AnnoncePhoto[];

  constructor(private annonceService: AnnonceServiceService) { }

  async ngOnInit() {
   this.ListAnnonce = await this.annonceService.getAllAnnonceAsync();

    this.ListAnnonce.forEach((e)=>{
      this.annonceService.getPhotosAnnonce(e.id).subscribe(data=> {
        console.log(data);
        this.ListPhotoAnnonce = data;
        e.photo=this.ListPhotoAnnonce[0].path;
      }, error => console.log(error) );
    })

    $(function () {
      $('.categories a').click(function (e) {
        $('.categories ul li').removeClass('active');
        $(this).parent('li').addClass('active');
        var itemSelected = $(this).attr('data-filter');
        $('.portfolio-item').each(function () {
          if (itemSelected == '*') {
            $(this).removeClass('filtered').removeClass('selected');
            return;
          } else if ($(this).is(itemSelected)) {
            $(this).removeClass('filtered').addClass('selected');
          } else {
            $(this).removeClass('selected').addClass('filtered');
          }
        });
      });
    });

  }

}
