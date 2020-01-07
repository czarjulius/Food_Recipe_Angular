import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('test one', 'very proteneous', 'https://asset-apac.unileversolutions.com/content/dam/unilever/knorr_world/nigeria/english/general_image/savoury/all/nkwobi-m-1212463.jpg.ulenscale.480x360.jpg '),
    new Recipe('Another one', 'very proteneous', 'https://asset-apac.unileversolutions.com/content/dam/unilever/knorr_world/nigeria/english/general_image/savoury/all/nkwobi-m-1212463.jpg.ulenscale.480x360.jpg '),
    new Recipe('The 3rd one', 'very proteneous', 'https://asset-apac.unileversolutions.com/content/dam/unilever/knorr_world/nigeria/english/general_image/savoury/all/nkwobi-m-1212463.jpg.ulenscale.480x360.jpg ')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}
