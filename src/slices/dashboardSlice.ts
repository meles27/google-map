import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
  refresh: false,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    closeDashboardSidebar: (state) => {
      state.sidebar = false;
    },
    openDashboardSidebar: (state) => {
      state.sidebar = true;
    },
    toggleDashboardSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },

    toggleRefresh: (state) => {
      state.refresh = !state.refresh;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  openDashboardSidebar,
  closeDashboardSidebar,
  toggleDashboardSidebar,
  toggleRefresh,
} = dashboardSlice.actions;
