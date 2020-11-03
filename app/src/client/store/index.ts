// Store生成関数とStore型の定義
import { createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { initialState, reducer } from './reducer'

export type StoreState = ReturnType<typeof initialState>
export type ReduxStore = Store<StoreState>

export function initStore(state = initialState()) {
  return createStore(reducer, state, composeWithDevTools())
}
