import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeUserName, customIncrement } from '../state/counter.actions';
import { ICounter } from '../state/counter.state';
import { getUserName } from '../state/counter.selector';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.scss'
})
export class CustomCounterInputComponent implements OnInit {
  userName!: string;
  constructor(private store: Store<{ counter: ICounter }>) { }
  ngOnInit(): void {
    this.store.select(getUserName).subscribe((username) => {
      console.log("Username observable");
      if (username) {
        this.userName = username;
      }
    });
  }
  customIncrementNumber(data: HTMLInputElement) {
    console.log("value: ", data.value);
    this.store.dispatch(customIncrement({ counter: Number(data.value) }));
  }

  changeUserName(): void {
    this.store.dispatch(changeUserName());
  }
}
