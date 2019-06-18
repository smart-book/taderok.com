import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { DynamicScriptLoaderService } from '../../dynamic-script-loader-service.service';

declare const $: any;
declare const M: any;

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  // dragdrop file upload
  public config: DropzoneConfigInterface = {
    url: 'https://example.com/post',    //Change your upload url
    maxFiles: 10,
    clickable: true,
    uploadMultiple: true,
    acceptedFiles: 'image/*',
    createImageThumbnails: true
};

constructor(private dynamicScriptLoader: DynamicScriptLoaderService) {}

  ngOnInit() {
    'use strict';
    this.startScript();

    // for labels overlapping prefilled content on floating label textitem
    M.updateTextFields();
  }
  async startScript() {
    await this.dynamicScriptLoader.load('form.min').then( data => {
      this.loadData();
    }).catch(error => console.log(error));
  }
  private loadData(){

       //Datetimepicker plugin
      $('.datetimepicker').bootstrapMaterialDatePicker({
        format: 'dddd DD MMMM YYYY - HH:mm',
        clearButton: true,
        weekStart: 1
      });

      $('.datepicker').bootstrapMaterialDatePicker({
        format: 'dddd DD MMMM YYYY',
        clearButton: true,
        weekStart: 1,
        time: false
      });
      $('.datepicker2').bootstrapMaterialDatePicker({
        format: 'DD MMMM YYYY',
        clearButton: true,
        weekStart: 1,
        time: false
      });

      $('.timepicker').bootstrapMaterialDatePicker({
        format: 'HH:mm',
        clearButton: true,
        date: false
      });

      $('input#input_text, textarea#textarea2').characterCounter();
   
  }

}
