import { Component, OnInit } from '@angular/core';
import {Seance} from "../../../../models/seance";
import {SeanceService} from "../../../../services/prof/seance.service";
import {DynamicScriptLoaderService} from "../../../../dynamic-script-loader-service.service";
import {Groupes} from "../../../../models/groupes";
import {GroupesService} from "../../../../services/prof/groupes.service";
declare const $: any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListGroupeComponent implements OnInit {

  list: Groupes[];

  constructor(private groupesService: GroupesService,private dynamicScriptLoader: DynamicScriptLoaderService)
  {

  }
  groupes : Groupes = new Groupes();



  ngOnInit() {


    this.groupesService.afficherGroupe().subscribe(data => {
      console.log(data);
      this.list = data;
    }, error => console.log(error));
    this.startScript();


  }

  async startScript() {
    await this.dynamicScriptLoader.load('dataTables.buttons','buttons.flash','jszip','pdfmake','vfs_fonts','pdfmake','buttons.html5','buttons.print').then( data => {
      this.loadData();
    }).catch(error => console.log(error));
  }

  private loadData(){
    $('#tableExport').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    });
  }

}
