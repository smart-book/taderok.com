import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {FeedbackService} from "../../../../services/prof/feedback.service";
import {Feedback} from "../../../../models/feedback";
import {Etudiant} from "../../../../models/etudiant";
import {Seance} from "../../../../models/seance";


// TODO: Replace this with your own data model type
export interface AfficherFeedbackItem{
  type: string;
  description: string;
  etudiant: Etudiant;
  seances: Seance;

}

export class AfficherFeedbackDataSource extends DataSource<Feedback>{
  ListFeedbacks: Object[];
  data: Feedback[];
  paginator: MatPaginator;
  sort: MatSort;
  objectFeedback ;
  showSpinner;

  constructor(private feedbackService: FeedbackService) {
    super();

    this.data = [];
    this.feedbackService.afficherFeedback().subscribe((data)=>{
        data.map(e => {
          this.objectFeedback = new Feedback();
          this.objectFeedback = e;
          this.data.push(this.objectFeedback);
        }); console.log(data)
      },error=> console.log(error), ()=>console.log('done')
    );

  }



  connect(): Observable<Feedback[]> {
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
  private getPagedData(data: Feedback[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Feedback[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'Nom': return compare(+a.etudiant.nom, +b.etudiant.nom, isAsc);
        case 'Prenom': return compare(+a.etudiant.prenom, +b.etudiant.prenom, isAsc);
        case 'E-mail': return compare(+a.etudiant.email, +b.etudiant.email, isAsc);
        case 'Type': return compare(+a.type, +b.type, isAsc);
        case 'Description': return compare(a.description, b.description, isAsc);
        case 'Matiere': return compare(a.seances.matiere, b.seances.matiere, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
