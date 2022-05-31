import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-services/api.service';
import { CategoriesService } from '../services/categories.service';

interface Category {
  name: string;
  url: string;
  id: number;
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

  public ngOnInit(): void {
    this.isLoading = true;

    this.api.categories.getAll().subscribe((data) => {
      this.categories = data;
      this.isLoading = false;
    });
  }

  public remove(category: Category) {
    if (confirm('Are you sure?')) {
      this.isLoading = true;
      this.api.categories.remove(category.id).subscribe((data) => {
        this.categories = data;
        this.isLoading = false;
      });
    }
  }
}
