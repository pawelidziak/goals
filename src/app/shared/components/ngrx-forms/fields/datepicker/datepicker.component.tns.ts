import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { BaseDynamicField } from '../base-dynamic-field';
import * as ModalPicker from 'nativescript-modal-datetimepicker';
import { TextField } from 'tns-core-modules/ui/text-field';

@Component({
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent extends BaseDynamicField {
  @ViewChild('textField', { static: true }) textField: ElementRef;

  date: string;
  pickDate() {
    const picker = new ModalPicker.ModalDatetimepicker();
    picker
      .pickDate({
        minDate: new Date(),
        is24HourView: true
      })
      .then(result => {
        this.date = `${result['day']}-${result['month']}-${result['year']}`;
        <TextField>this.textField.nativeElement.nativeView.clearFocus();
      })
      .catch(error => {
        console.log('Error: ' + error);
      });
  }
}
