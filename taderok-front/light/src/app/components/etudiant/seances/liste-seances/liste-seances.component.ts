import { Component, OnInit } from '@angular/core';
import {Seance} from "../../../../models/seance";
import {SeanceService} from "../../../../services/prof/seance.service";
declare const $: any;

@Component({
  selector: 'app-liste-seances',
  templateUrl: './liste-seances.component.html',
  styleUrls: ['./liste-seances.component.sass']
})
export class ListeSeancesComponent implements OnInit {
  listeSeance: Seance[];
  searchText;
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
