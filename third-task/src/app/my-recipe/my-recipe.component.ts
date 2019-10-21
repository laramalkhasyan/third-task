import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-recipe',
  templateUrl: './my-recipe.component.html',
  styleUrls: ['./my-recipe.component.css']
})
export class MyRecipeComponent implements OnInit {
  recipes = [{
    name: "A Test Recipe",
    content: "This is a simpe test",
    styleUrls: "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
  },
  {
    name: "A Test Recipe",
    content: "This is a simpe test",
    styleUrls: "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
  }]
  constructor() { }

  ngOnInit() {
  }

}