import { Component, OnInit } from '@angular/core';

import { DynamicScriptLoaderService } from '../../dynamic-script-loader-service.service';

declare const $: any;
declare const CKEDITOR: any;
declare const tinymce: any;

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.scss']
})
export class EditorsComponent implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    'use strict';
    this.startScript();
  }

  async startScript() {
    await this.dynamicScriptLoader.load('ckeditor', 'tinymce').then(data => {
      this.loadData();
    }).catch(error => console.log(error));
  }

  private loadData() {
    CKEDITOR.replace('ckeditor');
    CKEDITOR.config.height = 300;
    //TinyMCE

    tinymce.init({
      selector: 'textarea#tinymce1',
      theme: "modern",
      height: 300,
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools'
      ],

    });
  }


}
