import { GoalsListEffects } from './+state/goals-list.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GoalsListFacade } from './+state/goals-list.facade';
import { GoalsListService } from './goals-list.service';
import { FloatBtnModule } from '@shared/components/float-btn/float-btn.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { PlayerComponent } from './players.component';
import { PlayerDetailComponent } from './player-detail.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgRippleModule } from 'nativescript-ng-ripple';
import { APP_ROUTES } from '@core/routes';
import * as fromGoalsList from './+state/goals-list.reducer';
import { GoalsListResolver } from './goals-list.resolver';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      { path: '', redirectTo: `${APP_ROUTES.PLAYERS}` },
      { path: `${APP_ROUTES.PLAYERS}`, component: PlayerComponent, resolve: { GoalsListResolver }  },
      { path: `${APP_ROUTES.PLAYER_DETAIL}`, component: PlayerDetailComponent }
    ]),
    StoreModule.forFeature(
      fromGoalsList.GOALSLIST_FEATURE_KEY,
      fromGoalsList.reducer
    ),
    EffectsModule.forFeature([GoalsListEffects]),
    NgRippleModule,
    FloatBtnModule
  ],
  declarations: [PlayerComponent, PlayerDetailComponent],
  providers: [GoalsListService, GoalsListFacade, GoalsListResolver, GoalsListEffects],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PlayersModule {}
