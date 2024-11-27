import { createAsyncThunk, createSlice, isAction } from "@reduxjs/toolkit";
import axios from "axios";
import { createAction } from "@reduxjs/toolkit";
import { act } from "react";


const fetchJoke = createAsyncThunk("jokes/jokecategory",async function (category)
{
  return axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`).then(function(result){
  return result.data.value
  })
}
)

const initialState = {
    joke:"No joke"
}
const jokeSlice = createSlice(
    {
        name:"joke",
        initialState,
        reducers:{
            
        },
        extraReducers:(function(build){
            build.addCase(fetchJoke.pending,function(){
                console.log("Loading.....")
            }).addCase(fetchJoke.fulfilled,function(state,action){
                state.joke = action.payload
            })
        })
    }
)

export default jokeSlice
export {fetchJoke}