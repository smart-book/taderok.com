import { Component, OnInit } from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-advance-table',
  templateUrl: './advance-table.component.html',
  styleUrls: ['./advance-table.component.scss']
})
export class AdvanceTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.js-basic-example').DataTable({
      responsive: true
    });

    $('.save-stage').DataTable({
      "scrollX": true,
      stateSave: true
    });

    var t = $('#example3').DataTable({
      "scrollX": true
    });
    var counter = 1;

    $('#addRow').on('click', function () {
      t.row.add([
        counter + '.1',
        counter + '.2',
        counter + '.3',
        counter + '.4',
        counter + '.5'
      ]).draw(false);

      counter++;
    });
  }

}
