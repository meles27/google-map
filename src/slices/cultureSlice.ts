import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface CulturalPlace {
  name: string;
  position: [number, number];
}

// Example cultural places
const initialState: CulturalPlace[] = [
  {
    name: "Museum of Modern Art",
    position: [40.761436, -73.977621],
  },
  {
    name: "Metropolitan Museum of Art",
    position: [40.779437, -73.963244],
  },
  {
    name: "Guggenheim Museum",
    position: [40.783224, -73.95924],
  },
];
export const culturalPlaceSlice = createSlice({
  name: "culturalPlaces",
  initialState,
  reducers: {
    addCulturalPlace: (state, action) => {
      state.push(action.payload);
    },
    removeCulturalPlace: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCulturalPlace, removeCulturalPlace } =
  culturalPlaceSlice.actions;
