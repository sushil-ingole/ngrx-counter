import { Action, createReducer, on } from "@ngrx/store";
import { changeUserName, customIncrement, decrement, increment, reset } from "./counter.actions";
import { ICounter, initialState } from "./counter.state";

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        };
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        };
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        };
    }),
    on(customIncrement, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.counter
        };
    }),
    on(changeUserName, (state, action) => {
        return {
            ...state,
            userName: 'Sushil2'
        };
    })
)

export function counterReducer(state: ICounter = initialState, action: Action): ICounter {
    return _counterReducer(state, action);
}