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
      { path: '', redirectTo: 'goals' },
      {
        path: 'goals',
        component: GoalsComponent,
        children: [
          {
            path: 'players',
            outlet: 'playerTab',
            component: NSEmptyOutletComponent,
            loadChildren: () =>
              import('../player/players.module').then(m => m.PlayersModule)
          },
          {
            path: 'teams',
            outlet: 'teamTab',
            component: NSEmptyOutletComponent,
            loadChildren: () =>
              import('../team/teams.module').then(m => m.TeamsModule)
          }
        ]
      }
    ]),
    TNSFontIconModule,
    FloatBtnModule,
    
  ],
  declarations: [GoalsComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GoalsModule {}
