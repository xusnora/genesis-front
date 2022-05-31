import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-services/api.service';
import { CategoriesService } from '../services/categories.service';

interface Category {
  name: string;
  url: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public isLoading: boolean = false;

  public categories: Category[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.categories.getAll().subscribe((data) => {
      this.categories = data;
    });
  }
}
