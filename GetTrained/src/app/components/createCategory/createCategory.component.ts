import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './createCategory.component.html',
  styleUrls: ['./createCategory.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  createCategoryForm: FormGroup;

  constructor(private categoryService: CategoryService, private fb: FormBuilder, private router: Router) {
    this.createCategoryForm = this.fb.group({
      category_name:['', Validators.required]
    });
  }

  addCategory(category_name){   // add category
      this.categoryService.addCategory(category_name).subscribe(() =>{
        this.router.navigate(['/categories']);
      });
  }

  ngOnInit() {
  }

}
