import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from '../../dynamic-script-loader-service.service';

declare const $: any;
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) {}

  ngOnInit() {
    this.startScript();
  
  }

  async startScript() {
    await this.dynamicScriptLoader.load('table.min').then( data => {
      this.loadData();
    }).catch(error => console.log(error));
  }

  private loadData(){
    $('.js-basic-example').DataTable({
      responsive: true
    });
  }


}
