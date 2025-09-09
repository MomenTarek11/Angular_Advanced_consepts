import {Component, ElementRef, OnInit, ViewChild, viewChild} from '@angular/core';
import {
  Observable,
  Subscriber,
  Subscription,
  from,
  interval,
  of,
  fromEvent,
  debounceTime,
  take,
  takeWhile,
  takeLast, first, last, elementAt, filter, distinct
} from 'rxjs';
import { SubjectComponent } from './subject/subject.component';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [SubjectComponent, ReactiveFormsModule],
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
  // studentList = ['Momen', 'Tarek', 'Hafez', 'Ahmed'];
  // student: Observable<string[]> = of(this.studentList);
  // //use from
  // student2: Observable<string> = from(this.studentList);
  // constructor() {}
  // ngOnInit(): void {
  //   this.student.subscribe((data:any) => {
  //     console.log(data);
  //   });
  //   this.student2.subscribe((data:any) => {
  //     console.log(data, 'shika');
  //   });
  // }
  // #endregion


  // #region FromEvent Operator
  // @ViewChild('validate') validate!: ElementRef;
  // ngOnInit() {
  // }
  // RxjsFromEvent(){
  //   const validateBtn= fromEvent(this.validate.nativeElement, 'click');
  //
  // validateBtn.subscribe((value) => {
  //   console.log(value);
  // })
  // }
  // #endregion

  // #region Interval Operator
  // Nums$=interval(1000);
  // sub!: Subscription;
  // ngOnInit() {
  // this.sub=  this.Nums$.subscribe(data=>{
  //     console.log(data);
  //     if (data==10){
  //       this.sub.unsubscribe();
  //     }
  //   })
  // }
  // #endregion

  // #region debounceTime Operator
  // @ViewChild('validate') validate!: ElementRef;
  // ngOnInit() {
  // }
  // debounceTimeTest(){
  //  const btn=fromEvent(this.validate.nativeElement,'click');
  //   btn.pipe((debounceTime(2000))).subscribe((value)=>{
  //     console.log(value);
  //   })
  // }
  // #endregion


  // #region take & takeWhile & filter
  // form!:FormGroup;
  // constructor(private formBuilder: FormBuilder) {
  // }
  // ngOnInit() {
  // this.form=this.formBuilder.group({
  //   test: new FormControl(null, [Validators.required]),
  // })
  //   this.form.get('test')?.valueChanges
  //     .pipe(
  //       // debounceTime(2000),           // ⏳ الأول نستنى
  //       // takeWhile((v  :any) => this.checkValue(v)) // ✅ بعدين نقرر نوقف أو نكمل
  //       // take(2)
  //       filter((v:string)=>v.length<10)
  //     )
  //     .subscribe(value => console.log('Debounced value:', value));
  // }
  // checkValue(v:any):boolean{
  //   return v.length<5 ;
  // }
  // testTakeOperator(){
  //   // console.log(this.form.value)
  // }
  // #endregion


 // #region takeLast and first and last and elementAt
  categories=['one', 'two', 'three', 'four','two','one'];
  categories$:Observable<any>=from(this.categories)
  ngOnInit() {
    this.categories$.pipe(
      // takeLast(1),
      //   take(2)
      // first()
      // last()
      // elementAt(2)
      // distinct()
      ).subscribe((res)=>{
      console.log(res)
    })
  }
  // #endregion
}
