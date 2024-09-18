import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICounter } from '../state1/counter1.state';
import { getCounter } from '../state1/counter1.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss'
})
export class CounterOutputComponent implements OnInit {
  // @Input() counter!: number;
  counter!: number;
  counter$!: Observable<number>;
  // constructor(private store: Store<{ counter: ICounter }>) { }
































  constructor(private store: Store<{counter: ICounter}>) { }
  ngOnInit(): void {
    this.store.select(getCounter).subscribe((counter) => {
      console.log("Counter observable");
      this.counter = counter;
    });
    this.counter$ = this.store.select(getCounter);
  }
}
