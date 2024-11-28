import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription, interval } from 'rxjs';
import { SubjectComponent } from './subject/subject.component';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [SubjectComponent],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss',
})
export class ObservableComponent implements OnInit {
  subscription!: Subscription;
  person1 = { fName: 'userOne' };
  person2 = { fName: 'userTwo' };
  person = {
    fullName: function (this: { fName: string }): string {
      return this.fName + ' FullName';
    },
  };
  ngOnInit(): void {
    // first way to create observable
    // console.log(this.person.fullName.call(this.person1));
    // const obs$ = new Observable((Subscriber) => {
    //   Subscriber.next('in observable');
    // });
    // obs$.subscribe((data) => console.log(data));
    // ######################################################################################
    // second way to make observable
    // const obs2$ = new Observable(function subscribe(subscriber) {
    //   subscriber.next('Second way');
    // });
    // obs2$.subscribe(console.log);
    // ######################################################################################
    // Use the interval in observble
    // interval(1000).subscribe(console.log);
    // ######################################################################################
    // how to use the unsubiscribe
    // this.subscription = interval(1000).subscribe(console.log);
    // setTimeout(() => {
    //   this.subscription.unsubscribe();
    // }, 5000);
  }
}
