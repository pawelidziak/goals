import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromGoals from './goals.reducer';

@Injectable()
export class GoalsFacade {
  constructor(private store: Store<fromGoals.GoalsState>) {}
}
