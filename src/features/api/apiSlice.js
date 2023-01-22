import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://job-board-server-h5cb.onrender.com",
  }),
  tagTypes: ["jobs", "job"],
  endpoints: (builder) => ({}),
});
export default apiSlice;
