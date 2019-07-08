import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { AfficherFeedbackDataSource, AfficherFeedbackItem } from './afficher-feedback-datasource';

@Component({
  selector: 'app-afficher-feedback',
  templateUrl: './afficher-feedback.component.html',
  styleUrls: ['./afficher-feedback.component.css']
})
export class AfficherFeedbackComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<AfficherFeedbackItem>;
  dataSource: AfficherFeedbackDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new AfficherFeedbackDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
