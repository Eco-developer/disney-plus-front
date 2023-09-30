import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.userData = action.payload;
    },
    updateUserWatchlist: (state, action) => {
      state.userData.watchlist_items = action.payload;
    },
    setSignOutState: (state) => {
      state.userData = null;
    },
  },
});

export const {
  setUserLoginDetails, 
  updateUserWatchlist,
  setSignOutState,
} = userSlice.actions;

export const selectUser = (state) => state.user.userData;

export default userSlice.reducer;