import { Injectable, NgZone } from '@angular/core';

import { firestore as firebaseNamespace } from 'nativescript-plugin-firebase';
import { firestore } from 'nativescript-plugin-firebase/app';
import { Observable } from 'rxjs';

import { Priority } from '../+state';

@Injectable()
export class PrioritiesService {
  constructor(private zone: NgZone) {}

  getPriorities(): Observable<Priority[]> {
    return new Observable(subscriber => {
      const query: firebaseNamespace.Query = firestore()
        .collection('priorities')
        .orderBy('name', 'asc');
      query.onSnapshot((snapshot: firebaseNamespace.QuerySnapshot) =>
        this.zone.run(() => {
          const priorities = [];
          snapshot.forEach(docSnap =>
            priorities.push({ id: docSnap.id, ...docSnap.data() })
          );
          subscriber.next(priorities);
        })
      );
    });
  }
}
