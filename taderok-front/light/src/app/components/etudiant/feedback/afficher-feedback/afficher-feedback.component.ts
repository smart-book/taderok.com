import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { AfficherFeedbackDataSource } from './afficher-feedback-datasource';
import {FeedbackService} from "../../../../services/etudiant/feedback.service";
import {Feedback} from "../../../../models/feedback";

@Component({
  selector: 'app-afficher-feedback',
  templateUrl: './afficher-feedback.component.html',
  styleUrls: ['./afficher-feedback.component.css']
})
export class AfficherFeedbackComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Feedback>;
  dataSource: AfficherFeedbackDataSource;

  constructor(private feedbackService: FeedbackService) {
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Nom','Prenom','E-mail','Type', 'Description','Matiere'];

  ngOnInit() {
    this.dataSource = new AfficherFeedbackDataSource(this.feedbackService);
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
