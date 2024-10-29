import { configureStore } from "@reduxjs/toolkit";
import { testApi } from "../services/testApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { siteSlice } from "../slices/siteSlice";
import { dashboardSlice } from "../slices/dashboardSlice";
import { authApi } from "../services/authApi";
import { culturalPlaceSlice } from "../slices/cultureSlice";

export const store = configureStore({
  reducer: {
    culture: culturalPlaceSlice.reducer,
    site: siteSlice.reducer,
    dashboard: dashboardSlice.reducer,
    [testApi.reducerPath]: testApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testApi.middleware, authApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
