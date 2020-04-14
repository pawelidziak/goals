import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() text: string;
  @Input() fillColor = '#3F51B5';
  @Input() checked: boolean;
  @Output() checkedChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  public onCheckedChange(val: boolean) {
    // no idea why CheckBox plugin returns 'null'
    if (val === null || this.checked === val) {
      return;
    }
    this.checkedChanged.emit(val);
  }
}
