import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {ReclamationService} from "../../../../services/Admin/reclamation.service";
import {Reclamation} from "../../../../models/reclamation";
import {User} from "../../../../models/user";


// TODO: Replace this with your own data model type
export interface AfficherRecalamtionItem{
  id : number;
  date : Date;
  description : string;
  etat : boolean;
  type: string;
  user: User;
}

export class AfficherRecalamtionDataSource extends DataSource<Reclamation>{
  ListReclamations: Object[];
  data: Reclamation[];
  paginator: MatPaginator;
  sort: MatSort;
  objectReclamation ;

  constructor(private reclamationService: ReclamationService) {
    super();
    this.data = [];
    this.reclamationService.afficherReclamations().subscribe((data)=>{
        data.map(e => {
          console.log(e.type);
          this.objectReclamation = new Reclamation();
          this.objectReclamation = e;
          this.data.push(this.objectReclamation);
        }); console.log(data)
      },error=> console.log(error), ()=>console.log('done')
    );
  }

  connect(): Observable<Reclamation[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];
    console.log(this.data);

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }


  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Reclamation[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Reclamation[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'Nom': return compare(+a.user.nom, +b.user.nom, isAsc);
        case 'Prenom': return compare(+a.user.prenom, +b.user.prenom, isAsc);
        case 'E-mail': return compare(+a.user.email, +b.user.email, isAsc);
        case 'Date': return compare(+a.type, +b.type, isAsc);
        case 'Description': return compare(a.description, b.description, isAsc);
        case 'Type': return compare(a.type, b.type, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
