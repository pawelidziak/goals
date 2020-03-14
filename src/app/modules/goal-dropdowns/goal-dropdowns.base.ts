
import { OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DropdownsFacade, itemType } from './dropdowns-facade';


export class GoalDropdownsBase implements OnInit {
  items$ = this.facade.items$;
  selectedIndex$: Observable<number> = of(0);

  @Input()
  set selectedItem(item: itemType) {
    if (item) {
      this.selectedIndex$ = this.facade.getItemIndex(item);
      console.log('>>> item', item)
      console.log('>>> index', this.selectedIndex$)
    }
  }

  constructor(private facade: DropdownsFacade) {}

  ngOnInit() {
    this.facade.loadAll();
  }

  onItemChanged(item: itemType) {
    this.facade.selectItem(item.id);
  }
}
