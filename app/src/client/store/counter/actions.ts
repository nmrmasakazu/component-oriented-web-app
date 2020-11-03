// Action Creator（Actionを発行できる唯一の関数）
import types from './types'

export function increment() {
    return { type: types.inclement }
}

export function decrement() {
    return { type: types.decrement }
}

export function setCount(amount: number) {
    return {
        type: types.setCount,
        payload: { amount }
    }
}
