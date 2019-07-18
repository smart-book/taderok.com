import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Reclamation} from "../../../../models/reclamation";
import {ReclamationService} from "../../../../services/Admin/reclamation.service";


@Component({
  selector: 'app-affichage-reclamation',
  templateUrl: './affichage-reclamation.component.html',
  styleUrls: ['./affichage-reclamation.component.sass']
})
export class AffichageReclamationComponent implements OnInit,AfterViewInit {

  dataSource: MatTableDataSource<Reclamation>;
  displayedColumns: string[] = ['user.nom', 'user.prenom', 'user.email','type', 'description','date' ];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  value:string;
  constructor(private service: ReclamationService) {

  }

  ngOnInit() {

    this.service.afficherReclamations().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sortingDataAccessor = (item, property) => {
        switch(property) {
          case 'user.nom': return item.user.nom;
          case 'user.prenom': return item.user.prenom;
          case 'user.email': return item.user.email;
          case 'type': return item.type;
          case 'description': return item.description;
          case 'date': return item.date;
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
