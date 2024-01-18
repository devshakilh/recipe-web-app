// src/controllers/recipeController.ts
import { Request, Response } from 'express';

import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import { RecipeService } from './recipe.service';
import { Recipe } from '../../../generated/client';


const recipeService = new RecipeService();

export class RecipeController {
  async getAllRecipes(req: Request, res: Response) {
    const recipes = await recipeService.getAllRecipes();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Recipe successfully',
      data: recipes,
    });
  }

  async getRecipeById(req: Request, res: Response) {
    const recipeId = parseInt(req.params.id, 10);
    const recipe = await recipeService.getRecipeById(recipeId);

    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Recipe successfully By ID',
      data: recipe,
    });
  }

  async createRecipe(req: Request, res: Response) {
    const newRecipe = req.body as Recipe;

    try {
      const createdRecipe = await recipeService.createRecipe(newRecipe);
      res.status(201).json(createdRecipe);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async updateRecipe(req: Request, res: Response) {
    const recipeId = parseInt(req.params.id, 10);
    const updatedRecipe = req.body as Recipe;

    const existingRecipe = await recipeService.getRecipeById(recipeId);

    if (!existingRecipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    try {
      const modifiedRecipe = await recipeService.updateRecipe(recipeId, updatedRecipe);
      res.json(modifiedRecipe);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async deleteRecipe(req: Request, res: Response) {
    const recipeId = parseInt(req.params.id, 10);
    const existingRecipe = await recipeService.getRecipeById(recipeId);

    if (!existingRecipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    try {
      await recipeService.deleteRecipe(recipeId);
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
