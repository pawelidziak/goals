import {
  Component,
  EventEmitter,
  Output,
  Input,
  ElementRef,
  ViewChild
} from '@angular/core';
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  checkboxValue: boolean;

  @Output() counterChange: EventEmitter<boolean> = new EventEmitter();
  @Output() changed: EventEmitter<boolean> = new EventEmitter();

  @Input() text: string;
  @Input() fillColor = '#3F51B5';

  @ViewChild('checkbox', { static: false }) checkbox: ElementRef;

  @Input() get value(): boolean {
    return this.checkboxValue;
  }

  set value(value: boolean) {
    this.checkboxValue = value;
    this.counterChange.emit(this.checkboxValue);
  }

  constructor() {}

  public checkedChange(val: boolean) {
    this.changed.emit(val);
  }
}
