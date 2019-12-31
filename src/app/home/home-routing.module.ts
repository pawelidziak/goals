import { ListMoviesModule } from './../list-movies/list-movies.module';
import { HomeComponent } from '@src/app/home/home.component';
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
          import('../goals/goals.module').then(m => m.GoalsModule)
      },
      {
        path: '',
        loadChildren: () =>
          import('../team/teams.module').then(m => m.TeamsModule)
      },
      {
        path: '',
        loadChildren: () =>
          import('../player/players.module').then(m => m.PlayersModule)
      },
      {
        path: '',
        loadChildren: () =>
          import('../list-movies/list-movies.module').then(m => m.ListMoviesModule)
      },
    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule {}
