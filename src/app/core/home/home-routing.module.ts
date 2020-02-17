import { APP_ROUTES } from '@core/routes';
import { HomeComponent } from '@core/home/home.component';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

const routes: Routes = [
  {path: '', redirectTo: APP_ROUTES.GOALS, pathMatch: 'full'},
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@pages/goals/goals.module').then(m => m.GoalsModule)
      },
      {
        path: '',
        loadChildren: () =>
          import('@modules/team/teams.module').then(m => m.TeamsModule)
      },
      {
        path: '',
        loadChildren: () =>
          import('@modules/player/players.module').then(m => m.PlayersModule)
      },
      {
        path: '',
        loadChildren: () =>
          import('@core/pages/edit-goal/edit-goal.module').then(m => m.EditGoalModule)
      },
      // {
      //   path: '',
      //   loadChildren: () =>
      //     import('@modules/list-goals/list-goals.module').then(m => m.ListGoalsModule)
      // },
    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule {}
