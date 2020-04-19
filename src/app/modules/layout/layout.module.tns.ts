import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromLayout from './+state/layout.reducer';
import { LayoutEffects } from './+state/layout.effects';
import { LayoutFacade } from './+state/layout.facade';


@NgModule({
  imports: [
    NativeScriptCommonModule,
    StoreModule.forFeature(fromLayout.LAYOUT_FEATURE_KEY, fromLayout.reducer),
    EffectsModule.forFeature([LayoutEffects]),
  ],
  declarations: [],
  providers: [LayoutEffects, LayoutFacade],
  schemas: [NO_ERRORS_SCHEMA],
})
export class LayoutModule {}
