import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '*', redirectTo: '', pathMatch: 'full' },
  { path: '', loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule) },
  { path: 'new-goal', loadChildren: () => import('@modules/new-goal/new-goal.module').then(m => m.NewGoalModule) }
];
