

import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export const movieslice = createSlice({
    name: 'movie',
    initialState: {
        nowplaying:{},
        popular:{},
        toprated:{},
        upcoming:{}
    },
    reducers:{
        addnowplaying: (state, action: PayloadAction<any>) => {
            state.nowplaying = action.payload;
          },
          addpopular: (state, action: PayloadAction<any>) => {
            state.popular = action.payload;
          },
          addtoprated: (state, action: PayloadAction<any>) => {
            state.toprated = action.payload;
          },
          addupcoming: (state, action: PayloadAction<any>) => {
            state.upcoming = action.payload;
          }
    }


})

export const {addnowplaying,addpopular,addtoprated,addupcoming}=movieslice.actions;
export default movieslice.reducer;