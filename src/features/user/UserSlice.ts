import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface UserState {
    user: null
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: UserState = {
  user: null,
  status: 'idle'
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUserAsync.pending, (state) => {
        state.status = 'loading';
    })

    builder.addCase(getUserAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
    })

    builder.addCase(getUserAsync.rejected, (state) => {
        state.status = 'failed';
        state.user = null;
    })
  }
});

const fetchUser = async (username: string) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!data || typeof data !== 'object') {
            throw new Error('Invalid response format');
        }
        return data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to fetch user: ${error.message}`);
        }
        throw new Error('An unknown error occurred while fetching user');
    }
}

export const getUserAsync = createAsyncThunk(
    'user/getUserAsync',
    async (username: string) => {
        const user = await fetchUser(username);
        return user;
    }
)

export const selectUser = (state: RootState) => state.user.user;
export const selectUserStatus = (state: RootState) => state.user.status;

export default UserSlice.reducer;