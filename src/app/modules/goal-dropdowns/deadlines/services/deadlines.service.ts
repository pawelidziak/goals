import { Injectable, NgZone } from '@angular/core';

import { firestore as firebaseNamespace } from 'nativescript-plugin-firebase';
import { firestore } from 'nativescript-plugin-firebase/app';
import { Observable } from 'rxjs';

import { Deadline } from '../+state';

@Injectable()
export class DeadlinesService {
  constructor(private zone: NgZone) {}

  getDeadlines(): Observable<Deadline[]> {
    return new Observable(subscriber => {
      const colRef: firebaseNamespace.CollectionReference = firestore().collection(
        'deadlines'
      );
      colRef.onSnapshot((snapshot: firebaseNamespace.QuerySnapshot) =>
        this.zone.run(() => {
          const deadlines = [];
          snapshot.forEach(docSnap =>
            deadlines.push({ id: docSnap.id, ...docSnap.data() })
          );
          subscriber.next(deadlines);
        })
      );
    });
  }
}
