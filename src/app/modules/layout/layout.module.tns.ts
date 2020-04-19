import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgRippleModule } from 'nativescript-ng-ripple';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { GoalDropdownsModule} from '@modules/goal-dropdowns/goal-dropdowns.module';

import * as fromLayout from './+state/layout.reducer';
import { LayoutEffects } from './+state/layout.effects';
import { LayoutFacade } from './+state/layout.facade';
import { AddGoalModalComponent } from './/components/add-goal-modal/add-goal-modal.component';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';


@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    StoreModule.forFeature(fromLayout.LAYOUT_FEATURE_KEY, fromLayout.reducer),
    EffectsModule.forFeature([LayoutEffects]),
    TNSFontIconModule,
    NgRippleModule,
    GoalDropdownsModule,
  ],
  declarations: [AddGoalModalComponent, BottomNavigationComponent],
  exports: [AddGoalModalComponent, BottomNavigationComponent],
  providers: [LayoutEffects, LayoutFacade],
  schemas: [NO_ERRORS_SCHEMA],
})
export class LayoutModule {}
