import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


  export const fetchAllRecipes = createAsyncThunk('recipes/fetchAllRecipes',async()=>{
   const result = await axios.get('https://dummyjson.com/recipes')
//    sessionStorage
   sessionStorage.setItem("allRecipe",JSON.stringify(result.data.recipes))
//    console.log(result);
   return result.data.recipes
   
})

const recipeSlice = createSlice({
    name: "recipes",
    initialState:{
        allRecipe: [],
        dummyAllRecipes:[],
        loading:false,
        error:""
        
    },
    reducers:{
        // synchronous action
        searchRecipes:(state,searchKeyFromHeader)=>{
            state.allRecipe = state.dummyAllRecipes.filter(item=>item.cuisine.toLowerCase().includes(searchKeyFromHeader.payload))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllRecipes.fulfilled,(state,apiResult)=>{
            state.allRecipe = apiResult.payload
            state.dummyAllRecipes = apiResult.payload
            state.loading = false
            state.error = ""
        })
        builder.addCase(fetchAllRecipes.pending,(state,apiResult)=>{
            state.allRecipe = []
            state.dummyAllRecipes = []
            state.loading = true
            state.error = ""
        })
        builder.addCase(fetchAllRecipes.rejected,(state,apiResult)=>{
            state.allRecipe = []
            state.dummyAllRecipes = []
            state.loading = false
            state.error = "Api Call Failed"
        })
    }
})

export const {searchRecipes} = recipeSlice.actions

export default recipeSlice.reducer