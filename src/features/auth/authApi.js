import apiSlice from "../api/apiSlice";
import { getUser } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/user",
        body: data,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        // `onStart` side-effect
        try {
          const res = await queryFulfilled;
          // `onSuccess` side-effect
          dispatch(getUser(data.email));
        } catch (err) {}
      },
    }),
  }),
});
export const { useRegisterMutation } = authApi;
