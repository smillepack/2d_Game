import React from 'react'
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { combineReducers } from 'redux'




const appSlice = createSlice({
    name: 'app',
    initialState: {
        currentHero: 1,
    },
    reducers: {
        changeCurrentHero: (state, action) =>   { 
            return { 
                ...state,
                currentHero: action.payload
            } 
        }, 
    }
})


const appReducer = appSlice.reducer
const allReducers = combineReducers({
    appReducer,
})

export const { changeCurrentHero } = appSlice.actions
export const store = configureStore({
    reducer: allReducers
})