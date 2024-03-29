import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/recipes.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  public recipes;
  public recipeId: string;
  public selectedRecipe;

  constructor(
    public recipesService: RecipesService,
    private http: HttpClient,
    private route: ActivatedRoute,
  ){
    this.recipeId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.recipesService.selectedRecipe$
            .subscribe((recipe) => {
              this.recipeId = recipe ? recipe.id : this.recipeId;
            });

    this.getRecipe();
  }

  getRecipe() {
    this.http.get('./assets/recipes.json').subscribe((recipe) => {
      this.recipes = recipe;
      this.selectedRecipe = this.recipes.filter(recipe => {
        return recipe.id === parseInt(this.recipeId)}).shift();
    });
  }

}
