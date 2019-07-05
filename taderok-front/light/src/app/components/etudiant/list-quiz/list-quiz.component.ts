import { Component, OnInit } from '@angular/core';

import {ListQuizService} from '../../../services/etudiant/list-quiz.service';
import {QuizEtudiant} from "../../../models/QuizEtudiant";
declare const $: any;
@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.sass']
})
export class ListQuizComponent implements OnInit {
  quiz: QuizEtudiant[]
  n:number
  constructor(private quizServ: ListQuizService) { }


   async ngOnInit() {
    console.log("cooomp")
  this.quiz =  await this.quizServ.getAllQuiz();
    for (let s of this.quiz)
      console.log("eee"+s.id.etudiant.id)
    $('.js-basic-example').DataTable({
      responsive: true
    });

    $('.save-stage').DataTable({
      "scrollX": true,
      stateSave: true
    });

    var t = $('#example3').DataTable({
      "scrollX": true
    });
    var counter = 1;

    $('#addRow').on('click', function () {
      t.row.add([
        counter + '.1',
        counter + '.2',
        counter + '.3',
        counter + '.4',
        counter + '.5'
      ]).draw(false);

      counter++;
    });
  }


}
