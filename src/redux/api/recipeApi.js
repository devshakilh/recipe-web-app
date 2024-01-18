import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const RECIPE_URL = "/recipes";

export const recipesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all services
    recipes: build.query({
      query: (arg) => {
        return {
          url: RECIPE_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response, meta) => {
        return {
          recipes: response?.data?.data,
          meta,
        };
      },
      providesTags: [tagTypes.recipe],
    }),
    // get all services
    allRecipes: build.query({
      query: (arg) => {
        return {
          url: RECIPE_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response, meta) => {
        return {
          allRecipes: response?.data?.data,
          meta,
        };
      },
      providesTags: [tagTypes],
    }),
    createRecipes: build.query({
      query: (arg) => {
        return {
          url: `${RECIPE_URL}/create-recipe`,
          method: "POST",
          params: arg,
        };
      },
      transformResponse: (response, meta) => {
        return {
          allRecipes: response?.data?.data,
          meta,
        };
      },
      providesTags: [tagTypes],
    }),

    // get single service
    recipe: build.query({
      query: (id) => ({
        url: `${RECIPE_URL}/${id}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return {
          recipes: response?.data?.data,
        };
      },
      providesTags: [tagTypes],
    }),
  }),
});

export const { useRecipesQuery, useRecipeQuery,useCreateRecipesQuery, useAllRecipesQuery } = recipesApi;
