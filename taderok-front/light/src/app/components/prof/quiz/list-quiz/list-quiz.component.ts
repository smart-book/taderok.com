import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog} from '@angular/material';
import {Quiz} from "../../../../models/quiz";
import {QuizService} from "../../../../services/prof/quiz.service";
import {Question} from "../../../../models/Question";
import {Proposition} from "../../../../models/Proposition";
import Swal from "sweetalert2";
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
  quiz: Quiz = new Quiz();
  question: Question = new Question();
  proposition: Proposition = new Proposition();
  questionadded: Object;
  opened: boolean = false;
  rowId;
  idColumn = 'id';
  value: string;
  etat1 = false;
  etat2 = true;
  constructor(private quizService: QuizService) { }

  changementEtat() {
    if (this.etat1 === true) {
      this.etat1 = false;
    } else {
      this.etat1 = true;
    }
    if (this.etat2 === true) {
      this.etat2 = false;
    } else {
      this.etat2 = true;
    }
  }
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

  deleteQuiz(row){
    this.rowId = row.id;
    this.quizService.deleteQuiz(this.rowId).subscribe(()=> console.log('Quiz supprimé'));
    this.quizService.getAllQuiz().subscribe(data => {this.quizzes=data;
   });
    this.deleteRowDataTable(this.rowId, this.idColumn, this.paginator, this.dataSource);

  }
  addProposition(proposition, questionid) {
    this.quizService.addProposition(proposition, questionid).subscribe(() => console.log('proposition ajouté'));
    proposition.nom='';
    this.quizService.findQuiz(this.rowId).subscribe(data => this.quiz=data);
  }
  editQuiz(row){
    this.rowId = row.id;
    this.quizService.findQuiz(this.rowId).subscribe(data => this.quiz=data);
  }

  deleteQuestion(questionid){
    setTimeout(()=>{
      this.quizService.deleteQuestion(questionid).subscribe(()=>console.log('question supprimé!'));
      this.quizService.findQuiz(this.rowId).subscribe(data => this.quiz=data);
    })
  }

  deleteProposition(id) {
    this.quizService.deleteProposition(id).subscribe(() => console.log('supprimé'));
    this.quizService.findQuiz(this.rowId).subscribe(data => this.quiz=data);
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

  updateQuiz(id, quiz){
    this.quizService.updateQuiz(id, quiz).subscribe(data=>{this.quiz=data});
  }
  updateQuestion(id, question){
    this.quizService.updateQuestion(id, question).subscribe(data=>{this.question=data});
  }
  validateQuiz(id){
    this.quizService.validateQuiz(id).subscribe(()=>{console.log('quiz validé')});
      Swal.fire({
        type: 'success',
        title: 'Félicitation',
        text: 'votre quiz est validé',
      });
  }
  addQuestion(question, quizid) {
    this.quizService.addQuestion(question, quizid).subscribe(data => this.questionadded=data);
    this.quizService.findQuiz(this.rowId).subscribe(data => this.quiz=data);
    this.question.question='';
  }

}
