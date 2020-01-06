import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseDynamicField } from '../base-dynamic-field';

@Component({
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent extends BaseDynamicField {
  public selectedIndex = 1;

  public onchange(args: any) {
    console.log(
      `Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`
    );
  }

  public onopen() {
    console.log('Drop Down opened.');
  }

  public onclose() {
    console.log('Drop Down closed.');
  }
}
