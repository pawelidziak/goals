import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Repeat } from '../../add-goal/+state/add-goal.models';
import { GoalDropdownsBase } from '../goal-dropdowns.base';
import { AddGoalFacade } from '../../add-goal/+state/add-goal.facade';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repeats',
  templateUrl: './repeats.component.html',
  styleUrls: ['./repeats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepeatsComponent extends GoalDropdownsBase implements OnInit {
  icon = 'mdi-autorenew';
  iconColors = ['#AFB42B', '#00BCD4', '#673AB7', '#607D8B'];

  repeats: Repeat[];
  items$: Observable<string[]> = this.addGoalFacade.repeats$.pipe(
    map(repeats => repeats.map(repeat => repeat.name))
  );

  constructor(private addGoalFacade: AddGoalFacade) {
    super();
  }

  ngOnInit(): void {
    this.getRepeats();
  }

  getRepeats() {
    this.unsubscribes$.add(
      this.addGoalFacade.repeats$.subscribe(
        (prorities: Repeat[]) => (this.repeats = prorities)
      )
    );
  }

  onItemChanged = (index: number) =>
    this.addGoalFacade.selectRepeat(this.repeats[index]);
}
