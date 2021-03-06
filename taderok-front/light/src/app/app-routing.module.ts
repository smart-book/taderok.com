
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

    path: 'quiz',
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
    path: 'prof',
    loadChildren: () => import('./components/prof/prof.module').then(m => m.ProfModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./components/forum/forum.module').then(m => m.ForumModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'annonce',
    loadChildren: () => import('./components/annonce/annonce.module').then(m => m.AnnonceModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
  },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
