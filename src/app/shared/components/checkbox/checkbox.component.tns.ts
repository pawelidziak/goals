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
  @Input() text: string;
  @ViewChild('checkbox', { static: false }) checkbox: ElementRef;
  @Input() get value(): boolean {
    return this.checkboxValue;
  }

  constructor() {}

  set value(value: boolean) {
    this.checkboxValue = value;
    this.counterChange.emit(this.checkboxValue);
  }

  public toggleCheck() {
    this.checkbox.nativeElement.toggle();
  }

  public getCheckProp() {
    console.log('checked prop value = ' + this.checkbox.nativeElement.checked);
  }
}
