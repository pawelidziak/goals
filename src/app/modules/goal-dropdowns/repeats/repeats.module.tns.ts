import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DropDownIconModule } from '@shared/components/dropdown-icon/dropdown-icon.module.tns';

import { RepeatsComponent } from './repeats.component';
import * as fromRepeats from './+state';
import { RepeatsService } from './services/repeats.service';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    DropDownIconModule,
    StoreModule.forFeature(
      fromRepeats.REPEATS_FEATURE_KEY,
      fromRepeats.reducer
    ),
    EffectsModule.forFeature([fromRepeats.RepeatsEffects])
  ],
  declarations: [RepeatsComponent],
  exports: [RepeatsComponent],
  providers: [
    RepeatsService,
    fromRepeats.RepeatsFacade,
    fromRepeats.RepeatsEffects
  ],
  schemas: []
})
export class RepeatsModule {}
