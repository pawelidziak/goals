import {
  Component,
  EventEmitter,
  Output,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() text: string;
  @Input() fillColor = '#3F51B5';
  @Input() checked: boolean;
  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('checkbox', { static: false }) checkbox: ElementRef;

  constructor() {}

  public onCheckedChange(val: boolean) {
    this.checked = val;
    this.checkedChange.emit(val);
  }
}
