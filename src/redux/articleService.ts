import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type TSummaryResponse = {
  summary: string;
};

export const articleServiceApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_RAPIDAPI_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_RAPIDAPI_KEY);
      headers.set('X-RapidAPI-Host', import.meta.env.VITE_RAPIDAPI_HOST);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query<TSummaryResponse, { articleUrl: string }>({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleServiceApi;
