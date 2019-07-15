import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {Feedback} from "../../../../models/feedback";
import {FeedbackService} from "../../../../services/prof/feedback.service";
import {merge, Observable, of as observableOf} from "rxjs";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-list-feedback',
  templateUrl: './list-feedback.component.html',
  styleUrls: ['./list-feedback.component.sass']
})
export class ListFeedbackComponent implements OnInit {

  allFeedback: Feedback[];
  dataSource: MatTableDataSource<Feedback>;
  displayedColumns: string[] = ['Nom', 'Prenom', 'E-mail', 'Type', 'Description', 'Matiere'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private service: FeedbackService) {
    this.service.afficherFeedback().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource);
      console.log(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(filterValue);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
