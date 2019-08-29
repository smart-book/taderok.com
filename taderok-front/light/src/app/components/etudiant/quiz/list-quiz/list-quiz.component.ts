import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import {QuizService} from "../../../../services/prof/quiz.service";
import {Quiz} from "../../../../models/quiz";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.sass']
})
export class ListQuizComponent implements OnInit {

  constructor(private quizService: QuizService) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSource: MatTableDataSource<Quiz>
  displayedColumns = ['nom', 'nomProf','progressbar','list'];

  value: string;
  timeLeft: number = 60;
  interval;
  rowId;

  ngOnInit() {
    setTimeout(()=>{
      this.quizService.getAllQuiz().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        console.log(this.dataSource.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch(property) {
            case 'nom': return item.nomQuiz ;
            case 'nomProf': return item.prof.nom && item.prof.prenom;
            default: return item[property];
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

  applyFilter(filterValue: string) {
    const filters = filterValue.trim().toLowerCase();
    this.dataSource.filter = filters;
  }

  onSearchClear(){
    this.value = '';
  }

  afficherNote() {

    Swal.fire({
      title: 'Votre note est 15/20',
      animation: false,
      customClass: {
        popup: 'animated tada'
      }
    })




  }
  beginQuiz() {

    Swal.fire({
      title: "Quiz will begin shortly",
      type: "success",
      timer: 5000
    })


  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
        clearInterval(this.interval);

      }
    },5000)
  }

  getQuizId(row){
    this.rowId= row.id;
    console.log(this.rowId);
  }


}
