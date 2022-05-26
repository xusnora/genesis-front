import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  public products = [
    {
      name: 'Еда',
      url: 'assets/images/food.jpg',
    },
  ];

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
}
