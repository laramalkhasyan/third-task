import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {
  public ingredientName = ""
  public ingredientAmount = ""
  ingredients =[]
  public inputAmount = ""
  public inputName = ""
  constructor() { }

  ngOnInit() {
  }
  add(){    
    this.ingredients.push({
      name:this.ingredientName,
      amount: this.ingredientAmount
    });
  }
  delete(){
    this.ingredients.pop();
  }
  clear(){
    this.ingredientName = "";
    this.ingredientAmount = "";
  }
}
