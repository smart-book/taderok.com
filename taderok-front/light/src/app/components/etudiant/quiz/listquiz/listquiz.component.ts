import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, Sort} from "@angular/material";
import {Quiz} from "../../../../models/quiz";
import {ListQuizService} from "../../../../services/etudiant/list-quiz.service";
import Swal from "sweetalert2";


declare function raef(): any;

@Component({
  selector: 'app-listquiz',
  templateUrl: './listquiz.component.html',
  styleUrls: ['./listquiz.component.sass']
})


export class ListquizComponent implements OnInit,AfterViewInit {





  timeLeft: number = 60;
  interval;


  allquiz: Quiz[];
  dataSource: MatTableDataSource<Quiz>;
  value:string;
  displayedColumns: string[] = ['Nom','NomProf','link'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;



  constructor(private service:ListQuizService) {
    this.service.getAllQuiz().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource);
      console.log(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {

raef();
    setTimeout(() => {
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort = this.sort;
    }, 0);

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





  afficherQuestion() {






  }



  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(filterValue);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  OnSearchClear(){
    this.value='';
  }




}

