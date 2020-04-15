import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { LayoutComponent } from './layout.component';


@NgModule({
  imports: [
    NativeScriptCommonModule
  ],
  providers: [],
  declarations: [LayoutComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LayoutModule { }
