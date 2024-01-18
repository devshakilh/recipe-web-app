

// src/routes/recipeRoutes.ts
import express from 'express';
import { RecipeController } from './recipe.controller';


const router = express.Router();
const recipeController = new RecipeController();

router.get('/', recipeController.getAllRecipes);
router.get('/:id', recipeController.getRecipeById);
router.post('/create-recipe', recipeController.createRecipe);
router.put('/:id', recipeController.updateRecipe);
router.delete('/:id', recipeController.deleteRecipe);

export const RecipeRoutes = router;
