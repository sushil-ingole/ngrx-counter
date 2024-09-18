import { Action, createReducer, on } from "@ngrx/store";
import { ICounter, initialState } from "./counter1.state";
import { decrement, increment, reset } from "./counter1.actions";

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 2
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    })
);

export function counterReducer(state = initialState, action: Action): ICounter {
    return _counterReducer(state, action);
}