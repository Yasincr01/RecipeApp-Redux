import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from './slices/recipeSlice'

const recipeStore = configureStore({
    reducer:{
        recipeReducer:recipeSlice
    }
})

export default recipeStore