import { Injectable, NgZone } from '@angular/core';

import { firestore as firebaseNamespace } from 'nativescript-plugin-firebase';
import { firestore } from 'nativescript-plugin-firebase/app';
import { Observable } from 'rxjs';

import { Repeat } from '../+state';

@Injectable()
export class RepeatsService {
  constructor(private zone: NgZone) {}

  getRepeats(): Observable<Repeat[]> {
    return new Observable(subscriber => {
      const colRef: firebaseNamespace.CollectionReference = firestore().collection(
        'repeats'
      );
      colRef.onSnapshot((snapshot: firebaseNamespace.QuerySnapshot) =>
        this.zone.run(() => {
          const repeats = [];
          snapshot.forEach(docSnap =>
            repeats.push({ id: docSnap.id, ...docSnap.data() })
          );
          subscriber.next(repeats);
        })
      );
    });
  }
}
