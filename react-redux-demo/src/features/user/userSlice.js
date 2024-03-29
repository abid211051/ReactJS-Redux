import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialUserState = {
    loading: false,
    users: [],
    error: ''
}

// createAsyncThunk use to call asynchronus api method.Ex:GET, POST, PUT
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
})
const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false,
                state.users = action.payload,
                state.error = ''
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false,
                state.users = [],
                state.error = action.error.message
        })
    }
})
export default userSlice.reducer;
