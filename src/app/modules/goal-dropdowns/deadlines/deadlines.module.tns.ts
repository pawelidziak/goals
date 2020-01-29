import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DropDownIconModule } from '@shared/components/dropdown-icon/dropdown-icon.module.tns';

import { DeadlinesComponent } from './deadlines.component';
import * as fromDeadlines from './+state';
import { DeadlinesService } from './services/deadlines.service';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    DropDownIconModule,
    StoreModule.forFeature(
      fromDeadlines.DEADLINES_FEATURE_KEY,
      fromDeadlines.reducer
    ),
    EffectsModule.forFeature([fromDeadlines.DeadlinesEffects])
  ],
  declarations: [DeadlinesComponent],
  exports: [DeadlinesComponent],
  providers: [
    DeadlinesService,
    fromDeadlines.DeadlinesFacade,
    fromDeadlines.DeadlinesEffects
  ],
  schemas: []
})
export class DeadlinesModule {}
