import { configureStore } from '@reduxjs/toolkit';
import { articleServiceApi } from './articleService';

const store = configureStore({
  reducer: {
    [articleServiceApi.reducerPath]: articleServiceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleServiceApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
