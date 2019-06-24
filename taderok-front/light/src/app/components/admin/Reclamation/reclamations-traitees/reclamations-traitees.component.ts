import { Component, OnInit } from '@angular/core';
import {Reclamation} from "../../../../models/reclamation";
import {ReclamationService} from "../../../../services/Admin/reclamation.service";
import { DynamicScriptLoaderService } from '../../../../dynamic-script-loader-service.service';
declare const $: any;

@Component({
  selector: 'app-reclamations-traitees',
  templateUrl: './reclamations-traitees.component.html',
  styleUrls: ['./reclamations-traitees.component.sass']
})
export class ReclamationsTraiteesComponent implements OnInit {

  list: Reclamation[];

  constructor(private reclamationService: ReclamationService,private dynamicScriptLoader: DynamicScriptLoaderService) {
  }

  ngOnInit() {
    this.reclamationService.afficherReclamationsTraitees().subscribe(data => {
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
