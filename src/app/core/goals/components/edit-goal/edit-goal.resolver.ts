import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';

import { Observable, of } from 'rxjs';

import { GoalsFacade, GoalsState } from '@core/goals/+state';

@Injectable()
export class EditGoalResolver implements Resolve<GoalsState> {
  constructor(private facade: GoalsFacade) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    this.facade.selectGoal(route.paramMap.get('id'));
    return of(true);
  }
}
