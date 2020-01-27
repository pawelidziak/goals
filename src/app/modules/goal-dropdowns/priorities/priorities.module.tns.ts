import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DropDownIconModule } from '@shared/components/dropdown-icon/dropdown-icon.module.tns';

import { PrioritiesComponent } from './priorities.component';
import * as fromPriorities from './+state';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    DropDownIconModule,
    StoreModule.forFeature(
      fromPriorities.PRIORIES_FEATURE_KEY,
      fromPriorities.reducer
    ),
    EffectsModule.forFeature([fromPriorities.PrioritiesEffects])
  ],
  declarations: [PrioritiesComponent],
  exports: [PrioritiesComponent],
  providers: [],
  schemas: []
})
export class PrioritiesModule {}
