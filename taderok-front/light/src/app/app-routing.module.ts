
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },

    {
        path: 'authentication',
        loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {
        path: 'extra-pages',
        loadChildren: () => import('./extra-pages/extra-pages.module').then(m => m.ExtraPagesModule)
    },
  {
    path: 'components',
    loadChildren: () => import('./components/prof/prof.module').then(m => m.ProfModule)
  },
  {
    path: 'etudiant',
    loadChildren: () => import('./components/etudiant/etudiant.module').then(m => m.EtudiantModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./components/forum/forum.module').then(m => m.ForumModule)
  },
    {
        path: '',
        redirectTo: 'authentication',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
