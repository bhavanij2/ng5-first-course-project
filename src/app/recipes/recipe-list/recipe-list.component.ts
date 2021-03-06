import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Recipe Description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAF7rTiHiARQxR43t4ZvGHWRTehPbktXaMH81O_jTPNjAC0Q4dyg'),
    new Recipe('Another Test Recipe', 'Test Recipe Description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAF7rTiHiARQxR43t4ZvGHWRTehPbktXaMH81O_jTPNjAC0Q4dyg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
