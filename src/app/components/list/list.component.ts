import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes.service';
// import BandsJson from "src/assets/json/bands.json";

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
    this.http.get('./assets/bands.json').subscribe((recipe) => {
      this.recipes = recipe;
      this.noFilteredRecipes = recipe;
    });
  }

  filter(meal: string) {
    this.recipes = this.noFilteredRecipes.map(recipe => {
      let result = recipe.tags.filter(tag => tag === meal);

      if (result.length > 0) {
        return recipe;
      }
    });

    console.log(this.recipes);
    // debugger;
  }


  // searchBands(): void {
  //   console.log('entr');
  //   // this.allRockBands = this.noFilteredBands.filter(band => {
  //   //   return band.name.toLowerCase().includes(this.searchValue.toLowerCase());
  //   // });
  // }

  searchRecipes(): void {
    this.recipes = this.noFilteredRecipes.filter(band => {
      return band.name.toLowerCase().includes(this.searchValue.toLowerCase());
    });
  }

}
