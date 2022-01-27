import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/recipes.service';
// import BandsJson from "src/assets/json/bands.json";

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
  ){}

  ngOnInit() {
    this.getRecipe();

    this.recipesService.selectedRecipe$
            .subscribe( recipe => this.selectedRecipe = recipe);
  }

  getRecipe() {
    this.http.get('./assets/bands.json').subscribe((recipe) => {
      this.recipes = recipe;

      this.selectedRecipe = this.recipes.filter(recipe => {
        return recipe.id === parseInt(this.selectedRecipe.id)}).shift();
    });
  }

}
