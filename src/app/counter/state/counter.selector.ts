import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICounter } from "./counter.state";

const getCounterState = createFeatureSelector<ICounter>('counter');

export const getCounter = createSelector(getCounterState, state => {
    return state.counter;
});

export const getUserName = createSelector(getCounterState, state => {
    return state.userName;
});