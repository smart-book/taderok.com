import {Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import {Feedback} from "../../../../models/feedback";
import {FeedbackService} from "../../../../services/prof/feedback.service";




@Component({
  selector: 'app-list-feedback',
  templateUrl: './list-feedback.component.html',
  styleUrls: ['./list-feedback.component.sass']
})
export class ListFeedbackComponent implements OnInit,AfterViewInit{


  dataSource: MatTableDataSource<Feedback>;
  displayedColumns: string[] = ['etudiant', 'etudiant.email', 'type', 'description', 'seances.matiere'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  value:string;
  constructor(private service: FeedbackService) {

  }

    ngOnInit() {
      setTimeout(()=>{
      this.service.afficherFeedback().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        console.log(this.dataSource.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch(property) {
            case 'etudiant': return item.etudiant.nom && item.etudiant.prenom;
            case 'etudiant.email': return item.etudiant.email;
            case 'type': return item.type;
            case 'description': return item.description;
            case 'seances.matiere': return item.seances.matiere;
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
  ngAfterViewInit(){

  }

  applyFilter(filterValue: string) {
    const filters = filterValue.trim().toLowerCase();
    this.dataSource.filter = filters;
  }

  OnSearchClear(){
    this.value='';
  }

}
