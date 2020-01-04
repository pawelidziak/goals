import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../+state/ngrx-forms.models';

export class BaseDynamicField {
  @Input() field: Field;
  @Input() group: FormGroup;

  getStyles() {
    if (!this.field.styles) {
      return;
    }
    return { ...this.field.styles };
  }
}
