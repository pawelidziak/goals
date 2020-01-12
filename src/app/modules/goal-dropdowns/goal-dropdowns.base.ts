import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export class GoalDropdownsBase implements OnDestroy {
  protected unsubscribes$ = new Subscription();

  ngOnDestroy(): void {
    this.unsubscribes$.unsubscribe();
  }
}
