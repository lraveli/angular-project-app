import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Spaghetti with meatballs al forno', 'Tradicional italian recipe.',
        'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-600x900.jpg',
        [
            new Ingredient('Dried Spaghetti', 500),
            new Ingredient('Tomato Sauce', 1),
            new Ingredient('Beef Meatballs', 1)
        ]),
        new Recipe('Butternut Squash Soup', 'Easy and taste full soup.',
        'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/' +
        'recipe-image-legacy-id--1074500_11.jpg?itok=IwEifJO',
        [
            new Ingredient('Butternut Squash', 1),
            new Ingredient('Potato', 2),
            new Ingredient('Curry Powder', 10)
        ])
      ];

      constructor(private slService: ShoppingListService) {

      }

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}
