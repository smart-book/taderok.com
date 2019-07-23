import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog} from '@angular/material';
import {Ressource} from '../../../../models/ressource';
import {UploadFileService} from '../../../../services/upload/upload-file.service';
import {RessourceService} from '../../../../services/prof/ressource.service';



@Component({
  selector: 'app-afficher-ressource',
  templateUrl: './afficher-ressource.component.html',
  styleUrls: ['./afficher-ressource.component.sass']
})

export class AfficherRessourceComponent implements OnInit {
  uploadRessource: UploadFileService;
  ressource: Ressource = new Ressource();


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[]=['nom','date','lien', 'image'];
  dataSource: MatTableDataSource<Ressource>
  rowMatiere;
  rowGroupe;
  rowDuree;
  value;
  dialogRef;

  constructor(private ressourceService: RessourceService, public dialog: MatDialog) {}
  ngOnInit() {
    this.ressourceService.afficherRessource().subscribe(data => {
      this.dataSource= new MatTableDataSource(data);
      console.log(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sortingDataAccessor = (item, property) => {
        switch(property) {
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
    }, error => console.log(error));
  }

  selectRow(myTemplate, row) {
    this.rowMatiere = row['seance'].matiere;
    this.rowGroupe = row['seance'].groupes.nom;
    this.rowDuree = row['seance'].duree;

    const dialogRef = this.dialog.open(myTemplate);
  }

  onClick(): void {
    this.dialogRef.close();
  }
  applyFilter(filterValue: string) {
    const filters = filterValue.trim().toLowerCase();
    this.dataSource.filter = filters;
  }

  OnSearchClear(){
    this.value='';
  }

  afficherImage() {
  }
}
