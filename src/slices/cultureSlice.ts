import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./_culturalData";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface CulturalPlace {
  name: string;
  region?: string;
  latitude: number;
  longitude: number;
  description?: string;
}

// Example cultural places

export const culturalPlaceSlice = createSlice({
  name: "culturalPlaces",
  initialState,
  reducers: {
    addCulturalPlace: (state, action) => {
      state.places.push(action.payload);
    },

    addCulturalPlaces: (state, action: PayloadAction<CulturalPlace[]>) => {
      action.payload.map((place) => state.places.push(place));
    },
    removeCulturalPlace: (state, action) => {
      state.places.splice(action.payload, 1);
    },
    setActivePlace: (state, action) => {
      if (state.places.filter((place) => place.name === action.payload)) {
        state.active = action.payload;
      } else {
        state.active = null;
      }
    },
    openAddPlace: (state) => {
      state.place = true;
    },
    closeAddPlace: (state) => {
      state.place = false;
    },
    toggleAddPlace: (state) => {
      state.place = !state.place;
    },
    showLines: (state) => {
      state.showLines = true;
    },
    hideLines: (state) => {
      state.showLines = false;
    },
    toggleLines: (state) => {
      state.showLines = !state.showLines;
    },
    showDetail: (state) => {
      state.showDetail = true;
    },
    hideDetail: (state) => {
      state.showDetail = false;
    },
    toggleDetail: (state) => {
      state.showDetail = !state.showDetail;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addCulturalPlace,
  addCulturalPlaces,
  removeCulturalPlace,
  setActivePlace,
  openAddPlace,
  closeAddPlace,
  toggleAddPlace,
  showLines,
  hideLines,
  toggleLines,
  showDetail,
  hideDetail,
  toggleDetail,
} = culturalPlaceSlice.actions;
