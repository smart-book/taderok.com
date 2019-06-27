import {Component, OnInit} from '@angular/core';
import {ReclamationService} from "../../../../services/Admin/reclamation.service";
import {Reclamation} from "../../../../models/reclamation";
import {Observable} from "rxjs";
import { DynamicScriptLoaderService } from '../../../../dynamic-script-loader-service.service';
declare const $: any;

@Component({
  selector: 'app-list-reclamations',
  templateUrl: './list-reclamations.component.html',
  styleUrls: ['./list-reclamations.component.sass']
})
export class ListReclamationsComponent implements OnInit {

  list: Reclamation[];

  constructor(private reclamationService: ReclamationService,private dynamicScriptLoader: DynamicScriptLoaderService)
{

  }
  reclamation : Reclamation = new Reclamation();



  ngOnInit() {

    this.reclamationService.afficherReclamations().subscribe(data => {
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
    $(document).ready(function() {
      $('#tableExport').DataTable( {
        dom: 'Bfrtip',
        buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print'
        ]
      } );
    } );
  }


  TraiterReclamation(id){
     this.reclamationService.TraiterReclamation(id).subscribe(data=>console.log(data), error => console.log(error));
    location.reload();

  }


}
