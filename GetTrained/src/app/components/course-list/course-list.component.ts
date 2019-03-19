import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course.service';
import {Course} from 'src/app/models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.fetchCourses();
  }

  fetchCourses(){   // fetch the courses
    this.courseService
      .getCourses()
      .subscribe((data: Course[]) => {
        this.courses = data;
        // console.log('Data requested...');
        // console.log(this.courses);
      })
  }

}
