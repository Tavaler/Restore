<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../../features/contact/counterSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { basketSlice } from '../../features/basket/basketSlice';
import { catalogSlice }  from '../../features/catalog/catalogSlice';
import { accountSlice } from '../../features/account/accountSlice';

//configureStore เป็นของ redux toolkits ทำหน้าที่รวบรวม Slice/Reducer
export const store = configureStore({
    reducer:{
        counter : counterSlice.reducer,
        basket: basketSlice.reducer,
        catalog: catalogSlice.reducer,
        account: accountSlice.reducer,
    }
})


//เป็นค่า Default ที่มีอยู่ใน store คือ store.getState, store.dispatch (ใช้ตามรูปแบบเขาเลย)
export type RootState = ReturnType<typeof store.getState>	// ค่าของ state ทั้งหมด
export type AppDispatch = typeof store.dispatch;			// dispatch สำหรับเรียก action
 
//สำหรับเรียกใข้ dispatch และ state (ใช้ตามรูปแบบเขาเลย)
export const useAppDispatch = ()=>useDispatch<AppDispatch>()
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector
=======
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import accountSlice from "../../features/account/accountSlice";
import basketSlice from "../../features/basket/basketSlice";
import catalogSlice from "../../features/catalog/catalogSlice";
import { counterSlice } from "../../features/contact/counterSlice";
import { homeSlice } from "../../features/home/homeSlice";

 export const store = configureStore({
    reducer: {
      counter: counterSlice.reducer,
      screen : homeSlice.reducer,
      basket : basketSlice,
      catalog : catalogSlice,
      account : accountSlice
    }
  })

  //เป็นค่ํา Default ที่มีอยู่ใน store คือ store.getState, store.dispatch (ใช้ตามรูปแบบเขาเลย)
export type RootState = ReturnType<typeof store.getState> // ค่าของ state ทั้งหมด
export type AppDispatch = typeof store.dispatch; // dispatch ส าหรับเรียก action
//ส ําหรับเรียกใข้dispatch และ state (ใช้ตามรูปแบบเขาเลย)
export const useAppDispatch = ()=>useDispatch<AppDispatch>()
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
