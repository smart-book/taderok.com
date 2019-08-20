import { Component, OnInit } from '@angular/core';
import {SeanceService} from "../../../../services/prof/seance.service";
import {Seance} from "../../../../models/seance";
declare const $: any;

@Component({
  selector: 'app-liste-seances-prof',
  templateUrl: './liste-seances-prof.component.html',
  styleUrls: ['./liste-seances-prof.component.sass']
})
export class ListeSeancesProfComponent implements OnInit {

  searchText;
  listeSeance: Seance[];
  constructor(private seanceService: SeanceService) { }

  ngOnInit() {
    this.seanceService.afficherSeance().subscribe(data => {
      console.log(data);
      this.listeSeance = data;
    }, error => console.log(error));

    ///////// Filter function
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
