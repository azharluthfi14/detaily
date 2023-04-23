import { configureStore } from '@reduxjs/toolkit';
import { articleServiceApi } from './articleService';

export const store = configureStore({
  reducer: {
    [articleServiceApi.reducerPath]: articleServiceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleServiceApi.middleware),
});
