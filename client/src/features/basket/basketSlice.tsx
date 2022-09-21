import { createSlice } from '@reduxjs/toolkit'
import { Basket } from '../../App/model/Basket'


export interface BasketState {
  basket : Basket | null
}

const initialState: BasketState = {
  basket : null
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
     setBasket : (state,action)=>{
      state.basket = action.payload
     },

     removeItem :(state,action)=>{
      const {productId, quantity} = action.payload
      const {items} = state.basket!
      const itemIndex = items.findIndex((i) => i.productId === productId);
    if (itemIndex >= 0) {
      items[itemIndex].quantity -= quantity;
      if (items[itemIndex].quantity === 0) items.splice(itemIndex, 1);
      setBasket((prevState: any) => {
        return { ...prevState!, items };
      });
    }
     }
  },
})

// Action creators are generated for each case reducer function
export const { setBasket,removeItem } = basketSlice.actions

export default basketSlice.reducer