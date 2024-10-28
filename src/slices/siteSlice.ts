import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  navbar: false,
};

export const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {
    closeNavbar: (state) => {
      state.navbar = false;
    },
    openNavbar: (state) => {
      state.navbar = true;
    },
    toggleNavbar: (state) => {
      state.navbar = !state.navbar;
    },
  },
});

// Action creators are generated for each case reducer function
export const { closeNavbar, openNavbar, toggleNavbar } = siteSlice.actions;
