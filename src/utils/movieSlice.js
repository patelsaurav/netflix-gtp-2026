import { createSlice } from '@reduxjs/toolkit'


export const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovie: null,
        tailer: null
    },
    reducers: {

        addNowPlayingMovie: (state, action) => {

            state.nowPlayingMovie = action.payload

        },
        addTailerVideo: (state, action) => {
            state.tailer = action.payload
        }
    }
})



export const { addNowPlayingMovie, addTailerVideo } = movieSlice.actions;

export default movieSlice.reducer;