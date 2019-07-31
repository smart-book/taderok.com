import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog} from '@angular/material';
import {Ressource} from '../../../../models/ressource';
import {RessourceService} from '../../../../services/prof/ressource.service';

@Component({
  selector: 'app-archiver-ressource',
  templateUrl: './archiver-ressource.component.html',
  styleUrls: ['./archiver-ressource.component.sass']
})
export class ArchiverRessourceComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['nom', 'date', 'lien', 'image', 'archivage', 'suppression'];
  dataSource: MatTableDataSource<Ressource>;
  rowMatiere;
  rowGroupe;
  rowDuree;
  value;
  dialogRef;
  rowId;
  idColumn = 'id';
  array: Ressource[] = [];

  constructor(private ressourceService: RessourceService, public dialog: MatDialog) {}

  ngOnInit() {
    setTimeout(() => {
      this.ressourceService.afficherRessource().subscribe(data => {
        data.forEach(element => {
          if (!element.etat) {
            this.array.push(element);
          }
          
        });

        this.dataSource = new MatTableDataSource(this.array);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch (property) {
            case 'nom': return item.nom;
            case 'date': return item.seance.date_debut;

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
  showDiag(myTemplate, row) {
    this.rowMatiere = row.seance.matiere;
    this.rowGroupe = row.seance.groupes.nom;
    this.rowDuree = row.seance.duree;


    const dialogRef = this.dialog.open(myTemplate);
  }

  onClick(): void {
    this.dialogRef.close();
  }
  applyFilter(filterValue: string) {
    const filters = filterValue.trim().toLowerCase();
    this.dataSource.filter = filters;
  }

  OnSearchClear() {
    this.value = '';
  }
  deleteRowTable(rowId, idColumn, paginator, dataSource) {
    this.dataSource.data = dataSource.data;
    const itemIndex = this.dataSource.data.findIndex(obj => obj[idColumn] === rowId);
    console.log(itemIndex);
    dataSource.data.splice(itemIndex, 1);
    console.log(dataSource.data);
    dataSource.paginator = paginator;
  }
  desarchiverRessource(data, row) {
    this.rowId = row.id;
    this.ressourceService.déarchiverRessource(this.dataSource.data, this.rowId).subscribe(data => console.log(data), error => console.log(error));
    this.deleteRowTable(this.rowId, this.idColumn, this.paginator, this.dataSource);
  }
  supprimerRessources(row) {
    this.rowId = row.id;
    this.ressourceService.supprimerRessource(this.rowId).subscribe(() => console.log(' successful deletion '));
    this.deleteRowTable(this.rowId, this.idColumn, this.paginator, this.dataSource);
  }

}
