import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICounter } from "./counter1.state";

const getCounterState = createFeatureSelector<ICounter>('counter');

export const getCounter = createSelector(getCounterState, state => state.counter);