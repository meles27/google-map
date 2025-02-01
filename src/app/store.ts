import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authApi";
import { businessApi } from "../services/businessApi";
import { dashboardApi } from "../services/dashboardApi";
import { eventApi } from "../services/eventApi";
import { mapApi } from "../services/mapApi";
import { newsApi } from "../services/newsApi";
import { serviceApi } from "../services/serviceApi";
import { testApi } from "../services/testApi";
import { tourismApi } from "../services/tourismApi";
import { culturalPlaceSlice } from "../slices/cultureSlice";
import { dashboardSlice } from "../slices/dashboardSlice";
import { siteSlice } from "../slices/siteSlice";

export const store = configureStore({
  reducer: {
    culture: culturalPlaceSlice.reducer,
    site: siteSlice.reducer,
    dashboard: dashboardSlice.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [eventApi.reducerPath]: eventApi.reducer,
    [tourismApi.reducerPath]: tourismApi.reducer,
    [testApi.reducerPath]: testApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
    [mapApi.reducerPath]: mapApi.reducer,
    [businessApi.reducerPath]: businessApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      testApi.middleware,
      authApi.middleware,
      newsApi.middleware,
      eventApi.middleware,
      tourismApi.middleware,
      serviceApi.middleware,
      mapApi.middleware,
      businessApi.middleware,
      dashboardApi.middleware
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
