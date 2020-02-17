import { Observable, of } from 'rxjs';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

import { Priority, PrioritiesFacade } from './+state';

@Component({
  selector: 'app-priority',
  templateUrl: './priorities.component.html',
  styleUrls: ['./priorities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrioritiesComponent implements OnInit {
  @Input()
  set selectedItem(item) {
    if (item) {
      this.selectedIndex = this.facade.getPriorityIndex(item);
    }
  }
  icon = 'mdi-priority-high';
  items = this.facade.priorities$;
  selectedIndex: Observable<number> = of(0);

  constructor(private facade: PrioritiesFacade) {}

  ngOnInit() {
    this.facade.loadAll(); // should be call at goals lvl?
  }

  onItemChanged(priority: Priority) {
    this.facade.selectPriority(priority.id);
  }
}
