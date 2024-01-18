import { Router } from 'express';
import { RecipeRoutes } from '../modules/recipe/recipe.routes';


const router = Router();

const moduleRoutes = [

 
  {
    path: '/recipes',
    route: RecipeRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
