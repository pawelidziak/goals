import { FloatBtnModule } from '@shared/components/float-btn/float-btn.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { PlayerComponent } from './players.component';
import { PlayerDetailComponent } from './player-detail.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgRippleModule } from 'nativescript-ng-ripple';
import { APP_ROUTES } from '@core/routes';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      { path: '', redirectTo: `${APP_ROUTES.PLAYERS}` },
      { path: APP_ROUTES.PLAYERS, component: PlayerComponent },
      { path: APP_ROUTES.PLAYER_DETAIL, component: PlayerDetailComponent }
    ]),
    NgRippleModule,
    FloatBtnModule
  ],
  declarations: [PlayerComponent, PlayerDetailComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PlayersModule {}
