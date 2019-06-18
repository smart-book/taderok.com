import { Component, OnInit } from '@angular/core';
declare const $: any;
declare const window: any;
@Component({
  selector: 'app-sortable',
  templateUrl: './sortable.component.html',
  styleUrls: ['./sortable.component.scss']
})
export class SortableComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    'use strict';
    $(function () {
      $('.dd').nestable();

      $('.dd').on('change', function () {
        var $this = $(this);
        var serializedData = window.JSON.stringify($($this).nestable('serialize'));

        $this.parents('div.body').find('textarea').val(serializedData);
      });
    });
  }

}
