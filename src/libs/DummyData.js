import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const ProductApi = createApi({
    reducerPath:'products',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => "/products",
        }),

        getProductById: builder.query({
            query: (id) => `/products/${id}`
        })
    })
})


export const {useGetAllProductQuery, useGetProductByIdQuery} = ProductApi