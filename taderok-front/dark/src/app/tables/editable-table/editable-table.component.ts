import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.scss']
})
export class EditableTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    'use strict';
    $(function () {
      $('#mainTable').editableTableWidget();
    });
  }

}
