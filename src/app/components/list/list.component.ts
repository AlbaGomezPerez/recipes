import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  public recipes: any
  public searchValue: string = "";
  public noFilteredRecipes: any;
  constructor(
    public recipesService: RecipesService,
    private http: HttpClient,
  ){
  }

  ngOnInit() {
    this.http.get('./assets/recipes.json').subscribe((recipe) => {
      this.recipes = recipe;
      this.noFilteredRecipes = recipe;
    });
  }

  filter(meal: string) {
    this.recipes = this.noFilteredRecipes.filter(recipe => recipe.tags.includes(meal));

  }

  searchRecipes(): void {
    this.recipes = this.noFilteredRecipes.filter(band => {
      return band.name.toLowerCase().includes(this.searchValue.toLowerCase());
    });
  }

  updateSelectedRecipe(recipe) {
    this.recipesService.updateSelectedRecipe(recipe);
  }

}
