import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog} from '@angular/material';
import {Quiz} from "../../../../models/quiz";
import {QuizService} from "../../../../services/prof/quiz.service";
import {Question} from "../../../../models/Question";
declare const $: any;
@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.sass']
})
export class ListQuizComponent implements OnInit {

  dataSource : MatTableDataSource<Quiz>;

  @ViewChild (MatPaginator, {static: true}) paginator : MatPaginator;
  @ViewChild (MatSort, {static: true}) sort: MatSort;

  displayedColumns = ['nom', 'date', 'actions'];
quizzes: Object[];
  quiz: Object;
  question: Question = new Question();
  isViewable: boolean = true;
  opened: boolean = false;
  rowId;
  idColumn = 'id';
  value: string;

  constructor(private quizService: QuizService) { }

  ngOnInit() {

    setTimeout(()=>{
      this.quizService.getAllQuiz().subscribe(data => {
          this.dataSource = new MatTableDataSource(data);
          console.log(this.dataSource.data);

          this.dataSource.paginator = this.paginator;
          this.dataSource.sortingDataAccessor = (item, property) => {
            switch (property) {
              case 'nom':
                return item.nomQuiz;
              case 'date':
                return item.date;
              default:
                return item[property];
            }
          };
          this.dataSource.sort = this.sort;
          // @ts-ignore
          this.dataSource.filterPredicate = (order: Order, filter: string) => {
            const transformedFilter = filter.trim().toLowerCase();

            const listAsFlatString = (obj): string => {
              let returnVal = '';

              Object.values(obj).forEach((val) => {
                if (typeof val !== 'object') {
                  returnVal = returnVal + ' ' + val;
                } else if (val !== null) {
                  returnVal = returnVal + ' ' + listAsFlatString(val);
                }
              });

              return returnVal.trim().toLowerCase();
            };

            return listAsFlatString(order).includes(transformedFilter);
          };

        });
    });
  }



  changementEtat() {
    this.isViewable = !this.isViewable;
  }





  deleteQuiz(row){
    this.rowId = row.id
    this.quizService.deleteQuiz(this.rowId).subscribe(()=> console.log('Quiz supprimé'));
    this.quizService.getAllQuiz().subscribe(data => {this.quizzes=data;
   });
    this.deleteRowDataTable(this.rowId, this.idColumn, this.paginator, this.dataSource);

  }

  findQuiz(id){
    this.quizService.findQuiz(id).subscribe(data=> {this.quiz=data; console.log(this.quiz)});
  }

  applyFilter(filterValue: string) {
    const filters = filterValue.trim().toLowerCase();
    this.dataSource.filter = filters;
  }

  OnSearchClear(){
    this.value='';
  }

  deleteRowDataTable (recordId, idColumn, paginator, dataSource) {
    this.dataSource.data = dataSource.data;
    const itemIndex = this.dataSource.data.findIndex(obj => obj[idColumn] === recordId);
    console.log(itemIndex);
    dataSource.data.splice(itemIndex, 1);
    console.log(dataSource.data);
    dataSource.paginator = paginator;
  }


}
