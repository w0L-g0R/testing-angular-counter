
import { decrement, increment, reset } from '../actions/counter.actions';
import {Action, createReducer, on} from "@ngrx/store";

export type CounterState = number;

export const initialState: CounterState = 0;

const reducer = createReducer(
  initialState,
  on(increment, (state: any) => state + 1),
  on(decrement, (state: any) => state - 1),
  on(reset, (_: any, action: any) => action.count),
);

export function counterReducer(
  state: CounterState | undefined,
  action: Action,
): CounterState {
  return reducer(state, action);
}
