import { Component, OnInit } from '@angular/core';
import {DynamicScriptLoaderService} from "../../../../dynamic-script-loader-service.service";
import {ReclamationService} from "../../../../services/Prof/reclamation.service";
import {Reclamation} from "../../../../models/reclamation";

@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.sass']
})
export class ListerComponent implements OnInit {

  list: Reclamation[];

  constructor(private reclamationService: ReclamationService,private dynamicScriptLoader: DynamicScriptLoaderService)
  {

  }
  reclamation : Reclamation = new Reclamation();



  ngOnInit() {

    this.reclamationService.AfficherReclamationUser().subscribe(data => {
      console.log(data);
      //this.list = data;
    }, error => console.log(error));
    this.startScript();


  }


  async startScript() {
    await this.dynamicScriptLoader.load('googleapi').then( data => {
      this.loadData();
    }).catch(error => console.log(error));
  }

  private loadData(){

  }
}
