import {Component, OnInit, ViewChild} from '@angular/core';
import {AnnonceServiceService} from "../../../services/annonce/annonce-service.service";
import {Annonce} from "../../../models/Annonce";
import { MatTableDataSource, MatSort, MatPaginator, MatDialog} from '@angular/material';

@Component({
  selector: 'app-connected-user-list-annonce',
  templateUrl: './connected-user-list-annonce.component.html',
  styleUrls: ['./connected-user-list-annonce.component.sass']
})
export class ConnectedUserListAnnonceComponent implements OnInit {
  @ViewChild('calendar', {static: true})
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource:MatTableDataSource<Annonce>;
  displayedColumns: string[] = ['titre', 'categorie','description','prix', 'date','valide','action'];
  value: string;

  constructor(private annonceService: AnnonceServiceService) { }

  ngOnInit() {

    setTimeout(()=>{
      this.annonceService.getAllConnectedAnnonce().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        console.log(this.dataSource.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch(property) {
            case 'titre': return item.titre;
            case 'categorie': return item.categorie;
            case 'description': return item.description;
            case 'prix': return item.prix;
            case 'date': return item.date;
            case 'valide': return item.valide;
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
  applyFilter(filterValue: string) {
    const filters = filterValue.trim().toLowerCase();
    this.dataSource.filter = filters;
  }

  OnSearchClear(){
    this.value='';
  }
}
