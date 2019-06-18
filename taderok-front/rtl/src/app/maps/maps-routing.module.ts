import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleComponent } from './google/google.component';
import { VectorComponent } from './vector/vector.component';

const routes: Routes = [

  {
    path: 'google',
    component: GoogleComponent
  },
  {
    path: 'vector',
    component: VectorComponent
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
