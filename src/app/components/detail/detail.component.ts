import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  ){
    this.recipeId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    console.log(this.recipeId);
    this.http.get('./assets/bands.json').subscribe((recipe) => {
      this.recipes = recipe;
    });

    this.getRecipe();
  }

  getRecipe() {
    this.http.get('./assets/bands.json').subscribe((recipe) => {
      console.log(recipe);
      this.recipes = recipe;

      this.selectedRecipe = this.recipes.filter(band => {
        return band.id === parseInt(this.recipeId)}).shift();

        console.log(this.selectedRecipe);
    });

    //   this.bandsService.getBands().subscribe((recipes) => {

    //   });
  }

}
