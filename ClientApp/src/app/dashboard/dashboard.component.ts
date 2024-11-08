import { Component, OnInit } from '@angular/core';
import { category_model } from '../entities/category_model'
import { product_model } from '../entities/product_model'
import { CategoryCardComponent } from '../category-card/category-card.component'
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CategoryCardComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  categoriesList: category_model[] = []

  createCategoryList() {
    this.categoriesList.push({ categoryID: 1, categoryName: "Food" })
    this.categoriesList.push({ categoryID: 2, categoryName: "Furniture" })
    this.categoriesList.push({ categoryID: 3, categoryName: "Videogames" })
  }

  constructor() { }

  ngOnInit() {
    this.createCategoryList()
  }
}
