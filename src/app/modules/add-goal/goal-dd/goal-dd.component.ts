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
  styleUrls: ['./goal-dd.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalDdComponent implements OnInit {
  @Input() items: any[];
  @Input() icon: string;
  @Input() iconColors: string[];
  @ViewChild('dropDown', { static: false }) dropDown: ElementRef;
  selectedIndex = 0;
  currentIconColor = '';

  constructor() {}

  ngOnInit(): void {
    this.pickIconColor(0);
  }

  openDd() {
    const el = <DropDown>this.dropDown.nativeElement;
    el.open();
  }

  onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
    this.pickIconColor(args.newIndex);
  }

  private pickIconColor(index: number) {
    if (!this.iconColors || this.iconColors.length === 0) {
      return;
    }
    this.currentIconColor = this.iconColors[index];
  }
}
