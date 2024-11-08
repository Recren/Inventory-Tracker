import { Component, Input, OnInit } from '@angular/core';
import { category_model } from '../entities/category_model'
@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent implements OnInit{
  @Input() categoryInfo!: category_model

  ngOnInit() {
    console.log("ID: ", this.categoryInfo.categoryID)
    console.log("Name: ", this.categoryInfo.categoryName)
  }
}
