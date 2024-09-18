import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.scss'
})
export class CounterButtonsComponent {
  // @Output() increment = new EventEmitter();
  // @Output() decrement = new EventEmitter();
  // @Output() reset = new EventEmitter();

  constructor(private store: Store) { }

  onIncrement(): void {
    this.store.dispatch(increment());
  }
  onDecrement(): void {
    this.store.dispatch(decrement());
  }
  onReset(): void {
    this.store.dispatch(reset());
  }
}
