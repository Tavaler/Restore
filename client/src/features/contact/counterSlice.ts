import { createSlice } from "@reduxjs/toolkit"
<<<<<<< HEAD
 
export interface CounterState {
    data: number;
    title: string;
}
 
const initialState: CounterState = {
    data: 42,
    title: 'YARC (yet another redux counter with redux toolkit)'
}
 
//เป็นการจัดรูปแบบของ initialState , action ใหม่
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.data += action.payload
        },
        decrement: (state, action) => {
            state.data -= action.payload
        }
    }
})
 
export const {increment, decrement} = counterSlice.actions;
=======

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      num: 0
    },
    reducers: {
      incremented: (state,action) => {state.num += action.payload},
      decremented: (state,action) => {state.num -= action.payload}
    }
  })
  
  export const { incremented, decremented, } = counterSlice.actions
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
