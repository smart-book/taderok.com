import { Component, OnInit } from '@angular/core';
import {AnnonceServiceService} from "../../../services/annonce/annonce-service.service";
import {Annonce} from "../../../models/Annonce";
declare const $: any;

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrls: ['./list-annonce.component.sass']
})
export class ListAnnonceComponent implements OnInit {

  ListAnnonce : Annonce[];

  constructor(private annonceService: AnnonceServiceService) { }

  ngOnInit() {
    this.annonceService.getAllAnnonce().subscribe(data=> {
      console.log(data);
      this.ListAnnonce = data;
    }, error => console.log(error) );

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
