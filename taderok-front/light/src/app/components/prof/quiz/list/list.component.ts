import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable} from '@angular/material';
import { ListDataSource } from './list-datasource';
import {Quiz} from "../../../../models/quiz";
import {QuizService} from "../../../../services/prof/quiz.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable, {static: true}) table: MatTable<Quiz>;
  dataSource: ListDataSource;
  value:string;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nomQuiz'];
  constructor(private quizService: QuizService) {
  }
  ngOnInit() {
    this.dataSource = new ListDataSource(this.quizService);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onSearchClear(){
    this.value = '';
  }
}
