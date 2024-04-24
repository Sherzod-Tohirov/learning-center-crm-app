import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const subjectsApi = createApi({
  reducerPath: "subjects",
  tagTypes: ["Subjects"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9090",
  }),
  endpoints: (builder) => ({
    getSubjects: builder.query({
      query: () => "all-subject",
      providesTags: (result, error, arg) =>
        result?.length
          ? [...result.map(({ id }) => ({ type: "Subjects", id })), "Subjects"]
          : ["Subjects"],
    }),
    postSubject: builder.mutation({
      query: (data) => ({
        url: "subject/create",
        method: "post",
        body: data,
      }),
      invalidatesTags: ["Subjects"],
    }),
    deleteSubject: builder.mutation({
      query: (id) => ({
        url: `subject/delete/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["Subjects"],
    }),
  }),
});

export const {
  useGetSubjectsQuery,
  usePostSubjectMutation,
  useDeleteSubjectMutation,
} = subjectsApi;
