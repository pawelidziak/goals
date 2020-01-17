import { GoalsState } from '../+state/goals.reducer';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { GoalsFacade } from '../+state/goals.facade';

@Injectable()
export class GoalsResolver implements Resolve<GoalsState> {
  constructor(private facade: GoalsFacade) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    this.facade.loadAll();
    return of(true);
  }
}
