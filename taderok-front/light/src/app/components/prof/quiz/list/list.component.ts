import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable} from '@angular/material';
import { ListDataSource } from './list-datasource';
import {Quiz} from "../../../../models/quiz";
import {QuizService} from "../../../../services/prof/quiz.service";
import {Question} from "../../../../models/Question";
import {Proposition} from "../../../../models/Proposition";
import {BonneReponses} from "../../../../models/BonneReponses";

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
  quizadded: Object;
  questionadded: Object= null;
  question: Question = new Question();
  quiz: Quiz = new Quiz();
  proposition: Proposition = new Proposition();
  br: BonneReponses = new BonneReponses();
  propositions: Proposition[]=null;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nomQuiz'];
  constructor(private quizService: QuizService) {
  }

  ngOnInit() {
    setTimeout(()=>{
    this.dataSource = new ListDataSource(this.quizService);
    })
  }

  ngAfterViewInit() {
    setTimeout(()=>{
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    })
  }

  onSearchClear(){
    this.value = '';
  }

  addQuiz(p){
      this.quizService.addQuiz(p).subscribe(data => { this.quizadded = data });
    setTimeout(()=>{
      this.dataSource = new ListDataSource(this.quizService);
    })
  }
  addQuestion(q, id){
    this.quizService.addQuestion(q, id).subscribe(data => { this.questionadded=data;console.log(this.questionadded)});
  }
  addProposition(pr, id){
      this.quizService.addProposition(pr, id).subscribe(() => console.log('proposition ajouté'));
      this.proposition.nom='';
     setTimeout(()=> {
      this.quizService.getAllPropositions(id).subscribe(data => {this.propositions=data ; console.log(this.propositions)});
    })

  }

  deleteProposition(id){
      this.quizService.deleteProposition(id).subscribe(data => console.log(data));
   // setTimeout(()=> {
      this.quizService.getAllPropositions(id).subscribe(data => {this.propositions=data; console.log(this.propositions)});
    //})
  }

  addBR(pr, id){
    this.quizService.addBR(pr, id).subscribe(() => console.log('bonne réponse ajouté'));
    this.br.nom='';
  }
}
