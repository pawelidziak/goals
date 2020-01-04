import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { routes } from '@src/app/app.routes';

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '*', redirectTo: '', pathMatch: 'full' },
  // { path: '', loadChildren: () => import('@core/home/home.module').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('@modules/new-goal/new-goal.module').then(m => m.NewGoalModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
