import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public categories = [
    {
      name: 'Еда',
      url: 'assets/images/food.jpg',
    },
    {
      name: 'Молочные продукты',
      url: 'assets/images/milk.jpg',
    },
    {
      name: 'Цветы',
      url: 'assets/images/flowers.jpg',
    },
    {
      name: 'Книги',
      url: 'assets/images/books.jpg',
    },
    {
      name: 'Электроника',
      url: 'assets/images/electronics.jpeg',
    },
    {
      name: 'Игрушки',
      url: 'assets/images/Toys.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
