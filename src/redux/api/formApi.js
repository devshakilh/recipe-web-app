import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const RECIPE_URL = "/recipes";

const formApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //form recipe
    formRecipe: build.mutation({
      query: (data) => ({
        url: `${RECIPE_URL}/create-recipe`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.recipe],
    }),

  }),
});

export const { useFormRecipeMutation } = formApi;