import { Component, OnInit } from '@angular/core';
import {Quiz} from "../../../../models/quiz";
import {ListQuizService} from "../../../../services/prof/list-quiz.service";
declare const $: any;
@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.sass']
})
export class ListQuizComponent implements OnInit {
 quiz:Quiz[]
  constructor(private quizServ: ListQuizService) { }


  ngOnInit() {
    this.quizServ.getAllQuiz().subscribe(data => this.quiz = data);
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
