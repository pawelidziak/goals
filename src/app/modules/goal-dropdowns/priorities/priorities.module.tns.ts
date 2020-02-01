import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DropDownIconModule } from '@shared/components/dropdown-icon/dropdown-icon.module.tns';

import { PrioritiesComponent } from './priorities.component';
import * as fromPriorities from './+state';
import { PrioritiesService } from './services/priorities.service';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    DropDownIconModule,
    StoreModule.forFeature(
      fromPriorities.PRIORITIES_FEATURE_KEY,
      fromPriorities.reducer
    ),
    EffectsModule.forFeature([fromPriorities.PrioritiesEffects])
  ],
  declarations: [PrioritiesComponent],
  exports: [PrioritiesComponent],
  providers: [
    PrioritiesService,
    fromPriorities.PrioritiesFacade,
    fromPriorities.PrioritiesEffects
  ],
  schemas: []
})
export class PrioritiesModule {}
