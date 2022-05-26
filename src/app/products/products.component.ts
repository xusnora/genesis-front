import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../servises/categories.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products = this.categoriesService.products;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {}
}