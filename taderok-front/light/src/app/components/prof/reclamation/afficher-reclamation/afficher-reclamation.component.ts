import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { AfficherReclamationDataSource, AfficherReclamationItem } from './afficher-reclamation-datasource';

@Component({
  selector: 'app-afficher-reclamation',
  templateUrl: './afficher-reclamation.component.html',
  styleUrls: ['./afficher-reclamation.component.css']
})
export class AfficherReclamationComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<AfficherReclamationItem>;
  dataSource: AfficherReclamationDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new AfficherReclamationDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
