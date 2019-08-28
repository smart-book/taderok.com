import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import {Quiz} from "../../../../../models/quiz";
import {ListQuizService} from "../../../../../services/etudiant/list-quiz.service";
import Swal from "sweetalert2";
@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.sass']
})
export class AddquizComponent implements  OnInit{


  value: string;
  timeLeft: number = 60;
  interval;
  rowId;

  allquiz: Quiz[];

  constructor(private service:ListQuizService) { }

  ngOnInit() {
  }

  afficherNote() {

    Swal.fire({
      title: 'Votre note est 13/20',
      animation: false,
      customClass: {
        popup: 'animated tada'
      }
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
    },1000)
  }
}
