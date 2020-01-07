import { Recipe} from './recipe.model'

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('test one', 'very proteneous', 'https://asset-apac.unileversolutions.com/content/dam/unilever/knorr_world/nigeria/english/general_image/savoury/all/nkwobi-m-1212463.jpg.ulenscale.480x360.jpg '),
        new Recipe('Another one', 'very proteneous', 'https://asset-apac.unileversolutions.com/content/dam/unilever/knorr_world/nigeria/english/general_image/savoury/all/nkwobi-m-1212463.jpg.ulenscale.480x360.jpg '),
        new Recipe('The 3rd one', 'very proteneous', 'https://asset-apac.unileversolutions.com/content/dam/unilever/knorr_world/nigeria/english/general_image/savoury/all/nkwobi-m-1212463.jpg.ulenscale.480x360.jpg ')
      ]; 

      getRecipes(){
          return this.recipes.slice();
      }
}