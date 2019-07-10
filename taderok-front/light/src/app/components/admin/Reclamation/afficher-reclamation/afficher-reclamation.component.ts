import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import {ReclamationService} from "../../../../services/Admin/reclamation.service";
import {Reclamation} from "../../../../models/reclamation";
import {AfficherRecalamtionDataSource} from "./afficher-reclamation-datasource";
import set = Reflect.set;


@Component({
  selector: 'app-afficher-reclamation',
  templateUrl: './afficher-reclamation.component.html',
  styleUrls: ['./afficher-reclamation.component.css']
})

export class AfficherReclamationComponent implements AfterViewInit, OnInit {


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Reclamation>;
  dataSource: AfficherRecalamtionDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Nom','Prenom','E-mail','Date', 'Description','Type'];


  constructor(private reclamationService: ReclamationService)
  {
  }


  ngOnInit() {
    this.dataSource = new AfficherRecalamtionDataSource(this.reclamationService);
    console.log('this is the data source/n : ');
    console.log(this.dataSource.data);

  }

  ngAfterViewInit() {
    setTimeout(()=>{
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })
  }

}
