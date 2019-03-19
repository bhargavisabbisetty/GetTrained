import urlParser from 'js-video-url-parser';
import { Content } from './../../models/content.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Input() id;
  @Output() content = new EventEmitter<Content>();
  @Output() slide = new EventEmitter<Content>();
  textContent: Array<String>;
  text: String;
  slide_content: Content;
  video: String;
  title: String;
  constructor(private courseService: CourseService) {
    this.slide_content = new Content();
  }

  ngOnInit() {
    this.textContent = [];
    this.slide_content.id = this.id;
  }
  onAddText() {   // function to add text 
    this.textContent.push(this.text);
    this.text = '';
  }
  onRemoveText(content) {   // function to remove text
    const index = this.textContent.indexOf(content);
    this.textContent.splice(index, 1);
  }
  onFileSelected(event) { // function to upload a image
    const image = event.target.files[0];
    const data = new FormData();
    data.append('myFile', image, image.name);
    this.courseService.postImage(data).subscribe(
      res => {
        this.slide_content.image = '/images/' + res;
      }
    );
  }

  onDeleteSlide() { // function to delete a slide
    this.slide.emit(this.slide_content);
  }
  onSaveSlide() { // function to save slide
    let video = urlParser.parse(this.video);
    if (video === undefined) {
      video = '';
    }
    this.slide_content.title = this.title;
    this.slide_content.content = this.textContent;
    this.slide_content.video = video;
    this.content.emit(this.slide_content);
  }
}
