import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription, from, interval, of } from 'rxjs';
import { SubjectComponent } from './subject/subject.component';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [SubjectComponent],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss',
})
export class ObservableComponent implements OnInit {
  // subscription!: Subscription;
  // person1 = { fName: 'userOne' };
  // person2 = { fName: 'userTwo' };
  // person = {
  //   fullName: function (this: { fName: string }): string {
  //     return this.fName + ' FullName';
  //   },
  // };
  // ngOnInit(): void {
  //   // first way to create observable
  //   // console.log(this.person.fullName.call(this.person1));
  //   // const obs$ = new Observable((Subscriber) => {
  //   //   Subscriber.next('in observable');
  //   // });
  //   // obs$.subscribe((data) => console.log(data));
  //   // ######################################################################################
  //   // second way to make observable
  //   // const obs2$ = new Observable(function subscribe(subscriber) {
  //   //   subscriber.next('Second way');
  //   // });
  //   // obs2$.subscribe(console.log);
  //   // ######################################################################################
  //   // Use the interval in observble
  //   // interval(1000).subscribe(console.log);
  //   // ######################################################################################
  //   // how to use the unsubiscribe
  //   // this.subscription = interval(1000).subscribe(console.log);
  //   // setTimeout(() => {
  //   //   this.subscription.unsubscribe();
  //   // }, 5000);
  // }

  // #region Create Observable
  // Another Way to implement the observable
  // agents!: Observable<string>;
  // agentName: string = '';
  // constructor() {}
  // ngOnInit(): void {
  //   this.agents = new Observable((observer) => {
  //     try {
  //       observer.next('Momen');
  //       setInterval(() => {
  //         observer.next('Tarek');
  //       }, 3000);
  //       setInterval(() => {
  //         observer.next('Hafez');
  //       }, 4000);
  //     } catch (err) {
  //       observer.error(err);
  //     }
  //   });

  //   this.agents.subscribe((data) => {
  //     this.agentName = data;
  //   });
  // }
  // #endregion

  // #region Of & from Operator
  studentList = ['Momen', 'Tarek', 'Hafez', 'Ahmed'];
  student: Observable<string[]> = of(this.studentList);
  //use from
  student2: Observable<string> = from(this.studentList);
  constructor() {}
  ngOnInit(): void {
    this.student.subscribe((data) => {
      console.log(data);
    });
    this.student2.subscribe((data) => {
      console.log(data, 'shika');
    });
  }
  // #endregion
}
