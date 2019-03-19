import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  // sends request to server to fetch categories
  getCategories() {
    return this.http.get(`${environment.apiBaseUrl}/categories`);
  }

  // sends request to server to add a new category
  addCategory(category_name) {
    const category = {
      category_name: category_name
    };
    return this.http.post(`${environment.apiBaseUrl}/categories`, category);
  }

  // sends request to server to delete added category
  deleteCategory(id) {
    return this.http.delete(`${environment.apiBaseUrl}/categories/${id}`);
  }

}
