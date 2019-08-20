import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import {Quiz} from "../../../../../models/quiz";
import {ListQuizService} from "../../../../../services/etudiant/list-quiz.service";

@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.sass']
})
export class AddquizComponent implements  OnInit{



  allquiz: Quiz[];

  constructor(private service:ListQuizService) { }

  ngOnInit() {
  }

}
