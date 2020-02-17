import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { DropdownsFacade } from '../../dropdowns-facade';
import * as RepeatsSelectors from './repeats.selectors';
import * as RepeatsActions from './repeats.actions';
import { RepeatsState } from './repeats.reducer';
import { Repeat } from './repeats.models';

@Injectable()
export class RepeatsFacade implements DropdownsFacade {
  loaded$ = this.store.pipe(select(RepeatsSelectors.getRepeatsLoaded));
  items$ = this.store.pipe(select(RepeatsSelectors.getAllRepeats));
  selectedItem$ = this.store.pipe(select(RepeatsSelectors.getSelected));

  constructor(private store: Store<RepeatsState>) {}

  loadAll() {
    this.store.dispatch(RepeatsActions.loadRepeats());
  }

  selectItem(id: string) {
    this.store.dispatch(RepeatsActions.selectRepeat({ id }));
  }

  getItemIndex(deadline: Repeat) {
    return this.store.pipe(select(RepeatsSelectors.getRepeatIndex(deadline)));
  }
}
