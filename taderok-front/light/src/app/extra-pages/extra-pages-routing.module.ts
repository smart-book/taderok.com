import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { BlankPageComponent } from './blank-page/blank-page.component';

const routes: Routes = [

  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'blankPage',
    component: BlankPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtraPagesRoutingModule { }
