import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval, Observer } from 'rxjs';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
})
export class SessionComponent {
  private firstObsSubscription: Subscription = new Subscription();
  timer: number = 0;
  showAlert: boolean = false;

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count: any) => {
    //   console.log(count);
    // });

    const customIntervalObservable = new Observable(
      (observer: Observer<number>) => {
        let count: number = 0;

        setInterval(() => {
          observer.next(count);
          if (count === 5) {
            observer.complete();
          }
          if (count > 7) {
            observer.error(new Error('count is greater than 5!'));
          }
          count++;
        }, 1000);
      }
    );

    this.firstObsSubscription = customIntervalObservable.subscribe(
      (data: number) => {
        this.timer = data;
        console.log(data);
      },
      (error: Error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        this.showAlert = true;
        console.log('Completed from session count!');
      }
    );
  }

  ngOnDestroy() {
    if (this.firstObsSubscription) {
      this.firstObsSubscription.unsubscribe();
    }
  }
}
