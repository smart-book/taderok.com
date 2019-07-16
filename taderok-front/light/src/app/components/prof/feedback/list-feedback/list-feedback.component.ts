import {Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, Sort } from '@angular/material';
import {Feedback} from "../../../../models/feedback";
import {FeedbackService} from "../../../../services/prof/feedback.service";


@Component({
  selector: 'app-list-feedback',
  templateUrl: './list-feedback.component.html',
  styleUrls: ['./list-feedback.component.sass']
})
export class ListFeedbackComponent implements OnInit,AfterViewInit{


  dataSource: MatTableDataSource<Feedback>;
  displayedColumns: string[] = ['etudiant.nom', 'etudiant.prenom', 'etudiant.email', 'type', 'description', 'seances.matiere'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  value:string;
  constructor(private service: FeedbackService) {

  }

  ngOnInit() {

    this.service.afficherFeedback().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sortingDataAccessor = (item, property) => {
        switch(property) {
          case 'etudiant.nom': return item.etudiant.nom;
          case 'etudiant.prenom': return item.etudiant.prenom;
          case 'etudiant.email': return item.etudiant.email;
          case 'type': return item.type;
          case 'description': return item.description;
          case 'seances.matiere': return item.seances.matiere;
          default: return item[property];
        }
      };
      this.dataSource.sort = this.sort;

    });


  }
  ngAfterViewInit(){



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

