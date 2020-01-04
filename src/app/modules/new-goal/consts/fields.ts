import { Field } from '@shared/components/ngrx-forms';
import { Validators } from '@angular/forms';

export const structure: Field[] = [
  {
    type: 'INPUT',
    name: 'Title',
    placeholder: 'Title',
    validator: [Validators.required],
    styles: {
      width: '100%'
    }
  },
//   {
//     type: 'SELECT',
//     name: 'Priority',
//     validator: [Validators.required],
//     attrs: {
//       selectOptions: ['A', 'B', 'C', 'D']
//     },
//     styles: {
//       width: '100%'
//     }
//   },
//   {
//     type: 'DATEPICKER',
//     name: 'Deadline',
//     styles: {
//       width: '100%'
//     }
//   },
  {
    type: 'INPUT',
    name: 'Description',
    placeholder: 'Description',
    validator: [],
    styles: {
      width: '100%'
    }
  }
];
