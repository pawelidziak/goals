import { AddGoalModule } from './../add-goal/add-goal.module';
import { APP_ROUTES } from '@core/routes';
import { FloatBtnModule } from '@shared/components/float-btn/float-btn.module';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { NSEmptyOutletComponent } from 'nativescript-angular/router';
import { GoalsComponent } from './goals.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      { path: '', redirectTo: APP_ROUTES.GOALS },
      {
        path: APP_ROUTES.GOALS,
        component: GoalsComponent,
        children: [
          {
            path: APP_ROUTES.PLAYERS,
            outlet: 'playerTab',
            component: NSEmptyOutletComponent,
            loadChildren: () =>
              import('@modules/player/players.module').then(
                m => m.PlayersModule
              )
          },
          {
            path: APP_ROUTES.TEAMS,
            outlet: 'teamTab',
            component: NSEmptyOutletComponent,
            loadChildren: () =>
              import('@modules/team/teams.module').then(m => m.TeamsModule)
          }
        ]
      }
    ]),
    TNSFontIconModule,
    FloatBtnModule,
    AddGoalModule
  ],
  declarations: [GoalsComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GoalsModule {}
