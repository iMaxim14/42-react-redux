import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../../createAppSlice";
import type { UsersSliceState, UserData } from "./types";

const usersInitialState = {
    users: []
}

export const usersSlice = createAppSlice({
    name: 'USERS',
    initialState: usersInitialState,
    reducers: create => ({
        addUser: create.reducer((state: UsersSliceState, action: PayloadAction<UserData>)=>{
            state.users=[...state.users, action.payload]
        })
    }),
    selectors: {
        users: (state: UsersSliceState) => state.users,
    }
})

export const usersSliceActions = usersSlice.actions;
export const usersSliceSelectors = usersSlice.selectors;