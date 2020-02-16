import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Priority, PrioritiesFacade } from './+state';

@Component({
  selector: 'app-priority',
  templateUrl: './priorities.component.html',
  styleUrls: ['./priorities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrioritiesComponent implements OnInit {
  icon = 'mdi-priority-high';
  items$ = this.facade.priorities$;

  constructor(private facade: PrioritiesFacade) {}

  ngOnInit() {
    this.facade.loadAll(); // should be call at goals lvl?
  }

  onItemChanged(priority: Priority) {
    this.facade.selectPriority(priority.id);
  }
}
