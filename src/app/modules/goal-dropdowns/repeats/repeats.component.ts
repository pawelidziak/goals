import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { RepeatsFacade } from './+state/repeats.facade';

@Component({
  selector: 'app-repeats',
  templateUrl: './repeats.component.html',
  styleUrls: ['./repeats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepeatsComponent implements OnInit {
  icon = 'mdi-autorenew';
  items$ = this.facade.repeats$;

  constructor(private facade: RepeatsFacade) {}

  ngOnInit(): void {
    this.facade.loadAll(); // should be call at goals lvl?
  }

  onItemChanged(index: number) {}
}
