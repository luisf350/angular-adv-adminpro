import { Component, OnDestroy } from '@angular/core';
import {
  Observable,
  retry,
  interval,
  take,
  map,
  filter,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css',
})
export class RxjsComponent implements OnDestroy {
  private intervalSubs: Subscription;
  constructor() {
    // this.returnObservable()
    //   .pipe(retry(1))
    //   .subscribe({
    //     next: (v) => console.log('Subs', v),
    //     error: (e) => console.error(e),
    //     complete: () => console.info('complete'),
    //   });

    this.intervalSubs = this.returnInterval().subscribe({
      next: (v) => console.log('Value', v),
      error: (e) => console.error('Some error', e),
      complete: () => console.info('complete'),
    });
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  returnInterval(): Observable<number> {
    return interval(200).pipe(
      // take(10),
      map((value) => {
        return value + 1;
      }),
      filter((value) => value % 2 === 0)
    );
  }

  returnObservable(): Observable<number> {
    let i = 0;
    return new Observable<number>((observer) => {
      const interval = setInterval(() => {
        observer.next(i);
        i++;

        if (i === 5) {
          clearInterval(interval);
          observer.complete();
        }

        // if (i === 2) {
        //   console.log('i', i);

        //   observer.error('2nd item reached');
        // }
      }, 1000);
    });
  }
}
