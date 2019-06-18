import { Component, OnInit } from '@angular/core';

import { DynamicScriptLoaderService } from '../../dynamic-script-loader-service.service';

declare const $: any;
declare const CKEDITOR: any;
declare const tinymce: any;
@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) {}

  ngOnInit() {
    'use strict';
    this.startScript();
  }
  async startScript() {
    await this.dynamicScriptLoader.load('ckeditor').then( data => {
      this.loadData();
    }).catch(error => console.log(error));
  }


  private loadData(){
     //CKEditor
     CKEDITOR.replace('ckeditor');
     CKEDITOR.config.height = 300;
  }

}
