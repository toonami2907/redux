import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const response = await axios.get('https://dummyjson.com/users')
    return response.data
})


const UserSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isLoading: false,
        error: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})
export default UserSlice.reducer