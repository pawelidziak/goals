import { GoalsComponent } from '@src/app/goals/goals.component';
import { TeamsModule } from './../team/teams.module';
import { NSEmptyOutletComponent } from 'nativescript-angular/router';
import { PlayersModule } from './../player/players.module';
import { TeamsComponent } from './../team/teams.component';
import { PlayerComponent } from './../player/players.component';
import { HomeComponent } from '@src/app/home/home.component';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
    //   {
    //     path: 'teams',
    //     outlet: 'testTab',
    //     component: NSEmptyOutletComponent,
    //     loadChildren: () =>  import('../team/teams.module').then(m => m.TeamsModule)
    //     // component: TeamsComponent
    //   },
    //   {
    //     path: 'players',
    //     outlet: 'anotherTab',
    //     component: NSEmptyOutletComponent,
    //     loadChildren: () =>  import('../player/players.module').then(m => m.PlayersModule)
    //   },
      {
        path: 'goals',
        outlet: 'goalsTab',
        loadChildren: () =>  import('../goals/goals.module').then(m => m.GoalsModule)
      }
    ]
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule {}
