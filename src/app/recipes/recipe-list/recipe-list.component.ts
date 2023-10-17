import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://ocdn.eu/pulscms-transforms/1/xGVk9kuTURBXy9mZTYwNjBlNy1lYTcyLTQ1MGYtODE1ZC1kY2IwODUzMDUyMDIuanBlZ5KVAwAVzQPozQIzkwXNBLDNAoXeAAGhMAE' )
  ]

}
