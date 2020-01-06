import { Field } from '@shared/components/ngrx-forms';
import { Validators } from '@angular/forms';

export const structure: Field[] = [
  {
    type: 'INPUT',
    name: 'Title',
    placeholder: 'Title',
    validator: [Validators.required],
    styles: {
      width: '100%',
      'font-size': 18
    }
  },
  {
    type: 'DATEPICKER',
    name: 'Deadline',
    styles: {
      width: '50%',
      'font-size': 18
    }
  },
  {
    type: 'SELECT',
    name: 'Priority',
    validator: [Validators.required],
    attrs: {
      selectOptions: ['A', 'B', 'C', 'D']
    },
    styles: {
      width: '30%',
      'font-size': 18,
      'margin-left': '20%'
    }
  },
  {
    type: 'TEXTAREA',
    name: 'Description',
    placeholder: 'Description',
    validator: [],
    styles: {
      width: '100%',
      'font-size': 18
    }
  }
];
