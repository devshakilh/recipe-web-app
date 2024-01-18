// src/services/recipeService.ts
import { PrismaClient } from '@prisma/client';
import { Recipe } from '../../../generated/client';



const prisma = new PrismaClient();

export class RecipeService {
  async getAllRecipes(): Promise<Recipe[]> {
    return prisma.recipe.findMany();
  }

  // async getRecipeById(recipeId: Int): Promise<Recipe | null> {
  //   return prisma.recipe.findUnique({
  //     where: { id: recipeId },
  //   });
  // }

  async getRecipeById(recipeId: number): Promise<Recipe | null> {
    try {
      const recipe = await prisma.recipe.findUnique({
        where: {
          id: recipeId, // Provide the actual recipeId here
        },
      });
  
      return recipe || null;
    } catch (error) {
      // Handle the error appropriately
      console.error("Error fetching recipe by ID:", error);
      return null;
    }

  
  }
  
  
  async createRecipe(recipe: Recipe): Promise<Recipe> {
    return prisma.recipe.create({
      data: recipe,
    });
  }

  async updateRecipe(recipeId: number, updatedRecipe: Recipe): Promise<Recipe | null> {
    return prisma.recipe.update({
      where: { id: recipeId },
      data: updatedRecipe,
    });
  }

  async deleteRecipe(recipeId: number): Promise<void> {
    await prisma.recipe.delete({
      where: { id: recipeId },
    });
  }
}
