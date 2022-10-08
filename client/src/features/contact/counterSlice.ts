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
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
