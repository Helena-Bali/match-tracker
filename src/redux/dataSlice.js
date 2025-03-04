import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {fetchMatches} from '../api/matchesApi'

const initialState = {
    matches: [],
    status: "idle",
    error: null
}

export const getMatches = createAsyncThunk("matches/getMatches", async () => {
    return await fetchMatches();
});

const dataSlice = createSlice({
    name: 'matches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMatches.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getMatches.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.matches = action.payload;
            })
            .addCase(getMatches.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
                console.error("Ошибка: не удалось загрузить информацию", action.error.message);
            });
    },
})


export default dataSlice.reducer
