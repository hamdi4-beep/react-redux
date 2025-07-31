import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

const initialState = {
    username: 'hamdi4-beep',
    id: 8
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

export const selectUsername = (state: RootState): string => state.user.username

export default userSlice.reducer