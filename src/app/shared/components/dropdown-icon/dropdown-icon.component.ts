import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { DropDown } from 'nativescript-drop-down';
import { SelectedIndexChangedEventData } from 'tns-core-modules/ui/tab-view/tab-view';

/**
 * Items Input need to have name and color properties in each entity.
 */
@Component({
  selector: 'app-dropdown-icon',
  templateUrl: './dropdown-icon.component.html',
  styleUrls: ['./dropdown-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropDownIconComponent implements OnInit {
  private itemsList: any[] = [];
  itemsName: any[] = [];
  itemsColor: string[] = [];

  @Input()
  set items(items: any[]) {
    if (items.length > 0) {
      this.itemsList = items;
      this.itemsName = items.map(item => (item.name ? item.name : ''));
      this.itemsColor = items.map(item => (item.color ? item.color : ''));
      this.currentIconColor = this.itemsColor[this.selectedIndex];
    }
  }

  @Input() icon: string;
  @Input() labelSize = 10;
  @Input() labelMargin = 0;
  @Input() selectedIndex = 0;
  @Output() itemChanged: EventEmitter<any> = new EventEmitter();
  @ViewChild('dropDown', { static: false }) dropDown: ElementRef;
  currentIconColor = '';

  constructor() {}

  ngOnInit(): void {}

  openDd() {
    const el = <DropDown>this.dropDown.nativeElement;
    el.open();
  }

  onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
    this.pickIconColor(args.newIndex);
    this.itemChanged.emit(this.itemsList[args.newIndex]);
  }

  private pickIconColor(index: number) {
    if (!this.itemsColor || this.itemsColor.length === 0) {
      return;
    }
    this.currentIconColor = this.itemsColor[index];
  }
}
