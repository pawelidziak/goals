import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ElementRef
} from '@angular/core';
import { DropDown } from 'nativescript-drop-down';
import { SelectedIndexChangedEventData } from 'tns-core-modules/ui/tab-view/tab-view';

@Component({
  selector: 'app-dropdown-icon',
  templateUrl: './dropdown-icon.component.html',
  styleUrls: ['./dropdown-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropDownIconComponent implements OnInit {
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
