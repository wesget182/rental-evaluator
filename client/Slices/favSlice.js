import { createSlice } from '@reduxjs/toolkit';

export const fav = createSlice({
    name: 'fav',

    initialState: {
        gotFavs: false
    },
    reducers: {
        favsReducer: (state, action) => {
            console.log('action.payload in favsReducer', action.payload)
            state.gotFavs 
            ? state.gotFavs = false 
            : state.gotFavs = true;
        },
    }
})

export const { favsReducer} = fav.actions;

export default fav.reducer;

export const favState = (state) => state;