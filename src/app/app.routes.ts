import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '*', redirectTo: '', pathMatch: 'full'},
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
];
