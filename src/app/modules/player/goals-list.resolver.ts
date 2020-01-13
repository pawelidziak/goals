import { GoalsListState } from './+state/goals-list.reducer';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { GoalsListFacade } from './+state/goals-list.facade';

@Injectable()
export class GoalsListResolver implements Resolve<GoalsListState> {
  constructor(private facade: GoalsListFacade) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    this.facade.loadAll();
    return of(true);
  }
}
