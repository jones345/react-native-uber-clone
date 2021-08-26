import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    origin: null,
    destination: null,
    traveTimeInformation:null
}

export const navSlice = createSlice({
    name:"nav",
    initialState,
    reducer:{
        setOrigin:(state,action)=>{
            state.origin= action.payload;
        },
        setDestination:(state,action)=>{
            state.destination = action.payload;
        },
        setTraveTimeInformation: (state,action)=>{
            state.traveTimeInformation = action.payload
        }
    }
})
export const {setOrigin,setDestination,setTraveTimeInformation}= navSlice.actions;

//selector
export const selectOrgin =(state)=> state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
    state.nav.travelTimeInformation;

export default navSlice.reducer;
