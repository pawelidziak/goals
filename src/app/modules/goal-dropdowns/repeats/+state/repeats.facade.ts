import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as RepeatsSelectors from './repeats.selectors';
import * as RepeatsActions from './repeats.actions';
import { RepeatsState } from './repeats.reducer';

@Injectable()
export class RepeatsFacade {
  loaded$ = this.store.pipe(select(RepeatsSelectors.getRepeatsLoaded));
  repeats$ = this.store.pipe(select(RepeatsSelectors.getAllRepeats));
  selectedPriority$ = this.store.pipe(select(RepeatsSelectors.getSelected));

  constructor(private store: Store<RepeatsState>) {}

  loadAll() {
    this.store.dispatch(RepeatsActions.loadRepeats());
  }

}
