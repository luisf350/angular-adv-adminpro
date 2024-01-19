import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Data, Router } from '@angular/router';
import { Observable, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css',
})
export class BreadcrumbsComponent implements OnDestroy {
  title: string = '';
  titleSubs$: Subscription;

  constructor(private router: Router) {
    this.titleSubs$ = this.getRouteArgs().subscribe({
      next: ({ title }) => {
        this.title = title;
        document.title = `AdminPro - ${this.title}`;
      },
      error: (e) => console.error('Some error', e),
      complete: () => console.info('complete'),
    });
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getRouteArgs(): Observable<Data> {
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
