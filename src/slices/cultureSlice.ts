import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./_culturalData";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface CulturalPlace {
  name: string;
  latitude: number;
  longitude: number;
  description: string;
  region: string;
}

// Example cultural places

export const culturalPlaceSlice = createSlice({
  name: "culturalPlaces",
  initialState,
  reducers: {
    addCulturalPlace: (state, action) => {
      state.places.push(action.payload);
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
  },
});

// Action creators are generated for each case reducer function
export const {
  addCulturalPlace,
  removeCulturalPlace,
  setActivePlace,
  openAddPlace,
  closeAddPlace,
  toggleAddPlace,
  showLines,
  hideLines,
  toggleLines,
} = culturalPlaceSlice.actions;
