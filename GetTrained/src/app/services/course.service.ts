import { Content } from './../models/content.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Course } from './../models/course.model';

@Injectable()
export class CourseService {

  selectedSlide: Content = {
    id: 0,
    title: '',
    content: [],
    image: '',
    video: ''
  };

  selectedCourse: Course = {
    course_title: '',
    course_description: '',
    course_category: '',
    course_learners: [],
    course_created_date: '',
    course_modified_date: '',
    course_contents: [],
    course_status: '',
    course_created_by: ''
  };

  constructor(private http: HttpClient) {
  }
  // return list of all courses
  getCourses() {
    return this.http.get(`${environment.apiBaseUrl}/courses/?userId=${localStorage.getItem('id')}`);
  }
  // return list of all courses user is enrolled in
  getEnrolledCourses(id) {
    return this.http.get(`${environment.apiBaseUrl}/dashboard/` + id);
  }
  // post a new course
  postCourse(course: Course) {
    console.log(course);
    return this.http.post(`${environment.apiBaseUrl}/courses`, course);
  }
  // post a new image for a slide
  postImage(data: FormData) {
    return this.http.post(`${environment.apiBaseUrl}/images`, data);
  }

}
