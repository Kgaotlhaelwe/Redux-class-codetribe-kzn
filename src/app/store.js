import { configureStore } from "@reduxjs/toolkit";
import expenseReducer  from '../app/expenseSlice'

export const  store =  configureStore({
    reducer: {
        expense:expenseReducer

    }
})