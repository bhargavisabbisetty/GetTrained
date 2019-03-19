import { MatDialog } from '@angular/material';
import { CourseService } from './../../services/course.service';
import { Content } from './../../models/content.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RemoveSlideDialogComponent } from './../remove-slide-dialog/remove-slide-dialog.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-course-area',
  templateUrl: './create-course-area.component.html',
  styleUrls: ['./create-course-area.component.scss']
})
export class CreateCourseAreaComponent implements OnInit {
  @Output() content = new EventEmitter<Array<Content>>();
  @Output() numberOfSlides = new EventEmitter<number>();
  courseContent: Array<Content> = [];
  counter: Array<Number> = [];
  slide: Content;
  id: number;
  constructor(private courseService: CourseService, public dialog: MatDialog ) {
    this.id = 0;
   }

  ngOnInit() {
    this.counter.push(this.id);
    // const newSlide = new Content();
    // this.courseContent.push(newSlide);
  }

  addSlide(content: Content) {
      this.courseContent.push(content);
      this.dialog.open(RemoveSlideDialogComponent, {
        width: '250px',
        data: {message: 'Slide Saved'}
      });
  // Add a course
  }
  resetContentFields() {     // reset text fields
    this.courseService.selectedSlide = {
      id: 0,
      title: '',
      content: [],
      image: '',
      video: ''
    };
  }

  addNewSlide() {
    this.id++;
    this.counter.push(this.id); // add new slides
  }
  removeSlide(slide) {  // remove slide
    if (this.counter.length === 1) {
      this.dialog.open(RemoveSlideDialogComponent, {
        width: '250px',
        data: {message: 'This course needs at least one slide.'}
      });
    } else {
      const ind = this.counter.indexOf(slide.id);
      this.counter.splice(ind, 1);
      const index = this.courseContent.indexOf(slide);
      this.courseContent.splice(index, 1);
    }
  }
  createCourseContent() { // create content for course
    this.courseService.selectedCourse.course_contents = this.courseContent;
    localStorage.setItem('slides', JSON.stringify(this.courseContent.length));
  }
}
