import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { PrioritiesComponent } from './priorities.component';
import { DropDownIconModule } from '@shared/components/dropdown-icon/dropdown-icon.module.tns';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    DropDownIconModule
  ],
  declarations: [PrioritiesComponent],
  exports: [PrioritiesComponent],
  providers: [],
  schemas: []
})
export class PrioritiesModule {}
