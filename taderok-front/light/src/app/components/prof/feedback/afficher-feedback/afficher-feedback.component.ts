import { Component, OnInit } from '@angular/core';
import {FeedbackService} from 'src/app/services/prof/feedback.service';
import {Feedback} from "../../../../models/feedback";
declare const $: any;

@Component({
  selector: 'app-afficher-feedback',
  templateUrl: './afficher-feedback.component.html',
  styleUrls: ['./afficher-feedback.component.sass']
})
export class AfficherFeedbackComponent implements OnInit {

  constructor(private feedbackService: FeedbackService) {
  }

  ListFeedbacks: Feedback[];

  ngOnInit() {

    this.feedbackService.afficherFeedback().subscribe(data=>{console.log(data); this.ListFeedbacks=data}, error=>console.log(error),()=>console.log("done!"));
    $('.js-basic-example').DataTable({
      responsive: true
    });

    $('.js-basic-example').DataTable({
      responsive: true,
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
