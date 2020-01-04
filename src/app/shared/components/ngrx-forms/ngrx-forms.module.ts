import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromNgrxForms from '@shared/components/ngrx-forms/+state/ngrx-forms.reducer';
import { NgrxFormsEffects } from '@shared/components/ngrx-forms/+state/ngrx-forms.effects';
import { NgrxFormsFacade } from '@shared/components/ngrx-forms/+state/ngrx-forms.facade';
import { DynamicFormComponent } from '@shared/components/ngrx-forms/dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from '@shared/components/ngrx-forms/dynamic-form/dynamic-field.directive';
import { InputComponent } from '@shared/components/ngrx-forms/fields/input/input.component';
import { TextareaComponent } from '@shared/components/ngrx-forms/fields/textarea/textarea.component';
import { SelectComponent } from '@shared/components/ngrx-forms/fields/select/select.component';
import { DatepickerComponent } from '@shared/components/ngrx-forms/fields/datepicker/datepicker.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const MaterialModules = [
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...MaterialModules,

    StoreModule.forFeature(
      fromNgrxForms.NGRXFORMS_FEATURE_KEY,
      fromNgrxForms.reducer
    ),
    EffectsModule.forFeature([NgrxFormsEffects])
  ],
  providers: [NgrxFormsFacade],
  declarations: [
    DynamicFormComponent,
    DynamicFieldDirective,
    InputComponent,
    TextareaComponent,
    SelectComponent,
    DatepickerComponent
  ],
  entryComponents: [
    InputComponent,
    TextareaComponent,
    SelectComponent,
    DatepickerComponent
  ],
  exports: [DynamicFormComponent]
})
export class NgrxFormsModule {}
