import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { CategoryService } from '../../services/category.service';
import { ConstantPool } from '@angular/compiler';
import { Category } from 'src/app/models/category.model';
import { containsElement } from '@angular/animations/browser/src/render/shared';

@Component({
  selector: 'app-list',
  templateUrl: './listCategory.component.html',
  styleUrls: ['./listCategory.component.scss']
})
export class ListCategoryComponent implements OnInit {

  categories: Category[];

  displayedColumns: string[] = ['category_name', 'active', 'delete'];


  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {     // function to fetch categories
    this.categoryService
      .getCategories()
      .subscribe((data: Category[]) => {
        this.categories = data;
      });
  }

  deleteCategory(id) {    // function to delete category by id
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.fetchCategories();
    });
  }

}
