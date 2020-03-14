import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { APP_ROUTES } from '@core/routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { ListGoalsModule } from './components/list-goals/list-goals.module';
import { FloatBtnModule } from '@shared/components/float-btn/float-btn.module';
import { DropDownIconModule } from '@shared/components/dropdown-icon/dropdown-icon.module.tns';
import { GoalDropdownsModule } from '@modules/goal-dropdowns/goal-dropdowns.module';

import { GoalsFacade, GoalsEffects } from './+state';
import * as fromGoals from './+state/goals.reducer';
import { GoalsResolver, GoalsService } from './services';
import { AddGoalModule } from '@modules/add-goal/add-goal.module';
import { GoalsComponent } from './goals.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forChild([
      { path: '', redirectTo: APP_ROUTES.GOALS },
      {
        path: APP_ROUTES.GOALS,
        component: GoalsComponent,
        resolve: { GoalsResolver }
      }
    ]),
    StoreModule.forFeature(fromGoals.GOALS_FEATURE_KEY, fromGoals.reducer),
    EffectsModule.forFeature([GoalsEffects]),
    TNSFontIconModule,
    FloatBtnModule,
    AddGoalModule,
    DropDownIconModule,
    ListGoalsModule,
    GoalDropdownsModule
  ],
  declarations: [GoalsComponent],
  providers: [GoalsService, GoalsFacade, GoalsResolver, GoalsEffects],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GoalsModule {}
