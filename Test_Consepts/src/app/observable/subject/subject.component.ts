import { Component, OnInit } from '@angular/core';
import {
  ConnectableObservable,
  interval,
  multicast,
  of,
  refCount,
  Subject,
  Subscription,
  take,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss',
})
export class SubjectComponent implements OnInit {
  // Use the multicast in observble
  ngOnInit(): void {
    // const subject = new Subject<number>();
    // const obs$ = interval(1000).pipe(
    //   tap((data) => subject.next(data)),
    //   take(6)
    // );
    // obs$.subscribe();
    // subject.subscribe((data) => console.log(data));
    // setTimeout(() => {
    //   subject.subscribe((data) => console.log(data));
    // }, 3000);
    // *****************************************************************************
    // second way
    //   subject.subscribe((x) => {
    //     console.log('in observable a ', x);
    //   });
    //   subject.subscribe((x) => {
    //     console.log('in observable b ', x);
    //   });
    //   const obs$ = of(1, 2, 3);
    //   obs$.subscribe(subject);
    // }
    // *****************************************************************************
    // multicast in observble from scratch
    // let subscription1: Subscription;
    // let subscription2: Subscription;
    // const source = interval(1000);
    // const subject = new Subject<number>();
    // const multicasted = source.pipe(
    //   multicast(subject),
    //   refCount()
    // ) as ConnectableObservable<number>;
    // subscription1 = multicasted.subscribe((data) => console.log(data));
    // subscription2 = multicasted.subscribe((data) => console.log(data));
    // setTimeout(() => {
    //   subscription1.unsubscribe();
    //   subscription2.unsubscribe();
    // }, 4000);
    // multicasted.connect();
  }
}
