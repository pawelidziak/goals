import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  Input
} from '@angular/core';
import { DropDown } from 'nativescript-drop-down';
import { SelectedIndexChangedEventData } from 'nativescript-drop-down';

@Component({
  selector: 'app-goal-dd',
  templateUrl: './goal-dd.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalDdComponent implements OnInit {
  @Input() items: any[];
  @Input() icon: string;
  
  @ViewChild('dropDown', { static: false }) dropDown: ElementRef;
  selectedIndex = 0;
  constructor() {}

  ngOnInit(): void {}

  openDd() {
    const el = <DropDown>this.dropDown.nativeElement;
    el.open();
  }

  public onopen() {
    console.log('Drop Down opened.');
  }

  public onclose() {
    console.log('Drop Down closed.');
  }

  onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
    console.log(
      `Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`
    );
  }
}
