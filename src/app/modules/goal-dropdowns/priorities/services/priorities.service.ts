import { Injectable, NgZone } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Priority } from '../+state';

const MOCK = [
  { id: '1', name: 'Mock 1' },
  { id: '2', name: 'Mock 2' },
];


@Injectable()
export class PrioritiesService {
  constructor(private zone: NgZone) {}

  getPriorities(): Observable<Priority[]> {
    return of(MOCK);
  }
}
