import { createSelector } from "@reduxjs/toolkit";

export const getTotalQuantity = createSelector((state)=> state.cart.items, (items)=> {
    const quantityArr:number[] = Object.values(items);
    const totalQuantity = quantityArr.reduce((acc, current)=> acc + current,0);
    return totalQuantity
  });