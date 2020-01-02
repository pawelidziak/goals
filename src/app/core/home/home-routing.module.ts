import { HomeComponent } from '@core/home/home.component';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/goals', pathMatch: 'full'},
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../modules/goals/goals.module').then(m => m.GoalsModule)
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/team/teams.module').then(m => m.TeamsModule)
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/player/players.module').then(m => m.PlayersModule)
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/list-movies/list-movies.module').then(m => m.ListMoviesModule)
      },
    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule {}
