import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
    tagTypes: ["Shop"],
    endpoints: (builder) => ({
        getShopItems: builder.query({
            query: () => "shopItems",
            providesTags: ["Shop"]
        }),
        deleteShopItems: builder.mutation({
            query: (id) => ({
                url: `/shopItems/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Shop"]
        }),
        createShopItems: builder.mutation({
            query: (item) => ({
                url: "/shopItems",
                method: "POST",
                body: item
            }),
            invalidatesTags: ["Shop"]
        })
    })
})

export const {useGetShopItemsQuery, useDeleteShopItemsMutation, useCreateShopItemsMutation} = apiSlice