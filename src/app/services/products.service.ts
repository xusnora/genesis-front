import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products = [
    {
      name: 'nimadur',
      url: 'assets/images/food.jpg',
    },
  ];

  constructor() {}
}
