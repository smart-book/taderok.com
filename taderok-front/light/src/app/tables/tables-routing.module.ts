import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { AdvanceTableComponent } from './advance-table/advance-table.component';
import { GroupTableComponent } from './group-table/group-table.component';
import { ExportTableComponent } from './export-table/export-table.component';
import { ChildRowComponent } from './child-row/child-row.component';
import { EditableTableComponent } from './editable-table/editable-table.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic-tables',
    pathMatch: 'full'
  },
  {
    path: 'basic-tables',
    component: BasicTableComponent
  },
  {
    path: 'advance-tables',
    component: AdvanceTableComponent
  },
  {
    path: 'group-table',
    component: GroupTableComponent
  },
  {
    path: 'export-table',
    component: ExportTableComponent
  },
  {
    path: 'child-row-table',
    component: ChildRowComponent
  },
  {
    path: 'editable-table',
    component: EditableTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
