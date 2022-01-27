import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})


/**
 * Service to get data from the API
 */

export class RecipesService {
  private _selectedRecipe: BehaviorSubject<any>;

  constructor() {
    // Set the defaults
    this._selectedRecipe = new BehaviorSubject(null);
}

  set selectedRecipe(value: any) {
    // Store the value
    this._selectedRecipe.next(value);
}

get selectedRecipe$(): Observable<any> {
    return this._selectedRecipe.asObservable();
}


updateSelectedRecipe(recipe) {
  this.selectedRecipe = recipe;
}
}







