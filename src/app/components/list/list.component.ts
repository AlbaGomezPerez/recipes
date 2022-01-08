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
    this.recipes = this.recipes.map(recipe => {
      // recipe.tags.filter(tag => tag === 'Postre')
      let result = recipe.tags.filter(tag => tag === 'Postre');
      console.log(recipe);
      console.log(result);
      return result.length > 0 ? this.recipes.push(recipe) : null
    });
    debugger;
  }


  // searchBands(): void {
  //   console.log('entr');
  //   // this.allRockBands = this.noFilteredBands.filter(band => {
  //   //   return band.name.toLowerCase().includes(this.searchValue.toLowerCase());
  //   // });
  // }

  searchBands(): void {
    console.log('aq')
    this.recipes = this.noFilteredRecipes.filter(band => {
      return band.name.toLowerCase().includes(this.searchValue.toLowerCase());
    });

    console.log(this.recipes)
  }

}
