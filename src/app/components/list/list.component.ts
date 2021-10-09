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
  public recipes: {};
  constructor(
    public recipesService: RecipesService,
    private http: HttpClient,
  ){
  }

  ngOnInit() {
    this.http.get('./assets/bands.json').subscribe((recipe) => {
      this.recipes = recipe;
    });
  }

}
