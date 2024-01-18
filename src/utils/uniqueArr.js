export const getUniqueRecipes = (recipes) => {
  const recipeSet = new Set();
  return recipes?.reduce((uniqueRecipes, recipe) => {
    if (!recipeSet.has(recipe.recipe)) {
      recipeSet.add(recipe.recipe);
      uniqueRecipes.push({
        label: recipe.recipe,
        value: recipe.recipe,
      });
    }
    return uniqueRecipes;
  }, []);
};


