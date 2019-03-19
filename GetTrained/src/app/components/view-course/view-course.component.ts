import { UserService } from 'src/app/services/user.service';
import urlParser from 'js-video-url-parser';
import { Course } from './../../models/course.model';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IfStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})


export class ViewCourseComponent implements OnInit {

  course_data = JSON.parse(localStorage.getItem('course'));

  course_title = this.course_data.course.course_title;
  theme: String;
  temp: string;
  req: any;
  type: String;
  videoflag: Boolean;
  imageflag: Boolean;
  textflag: Boolean;

  isVideo: boolean;
  isnextDisabled: Boolean;
  isprevDisabled: Boolean;
  courseid = this.course_data.course._id;
  current_page = this.course_data.lastSlideIndex;
  progress = this.course_data.progress;
  course_description = this.course_data.course.course_description;
  contents = this.course_data.course.course_contents;

  constructor(
    private sanitizer: DomSanitizer,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkDisability();
    this.check_type(this.contents[this.current_page]);
  }

  getImageURL(image) {
    return 'http://localhost:3003/' + image;
  }

  getEmbedURL(video) {
    if (video === '') {
      console.log(this.isVideo+'I AM HERE');
      let obj2 = urlParser.parse('http://vimeopro.com/staff/frame/video/24069938');
      this.temp = urlParser.create({videoInfo: obj2, format: 'embed' });
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.temp);
    } else {
    this.temp = urlParser.create({videoInfo: video, format: 'embed' });
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.temp);
  }
}
  dec_page(current_page) {
    current_page = current_page - 1;
    this.current_page = current_page;
    this.checkDisability();
    this.check_type(this.contents[this.current_page]);
  }
  inc_page(current_page) {
    if (current_page === this.progress) {
      this.progress = this.progress + 1;
      this.checkDisability();
    }
    current_page = current_page + 1;
    this.current_page = current_page;
    this.checkDisability();
    this.check_type(this.contents[this.current_page]);
  }
  checkDisability() {
    if (this.current_page === 0) {
      this.isprevDisabled = true;
    } else {
      this.isprevDisabled = false;
    }
    if (this.current_page === this.contents.length - 1) {
      this.isnextDisabled = true;
    } else {
      this.isnextDisabled = false;
    }
  }

  update() {
    this.req = {
      current_page: this.current_page,
      course_id: this.courseid,
      progress: this.progress,
      user_id: localStorage.getItem('id')
    };
    this.userService.updateUser(this.req).subscribe((data: any) => {
      if (data) {
        this.router.navigate(['dashboard']);
      } else {
      }
    });
  }

  check_type(slide) {
      if (slide.content.length === 0) {
        this.textflag = false;
      } else {
        this.textflag = true;
      }
      if (slide.image === '') {
        this.imageflag = false;
      } else {
        this.imageflag = true;
      }
      if (slide.video === '') {
        this.videoflag = false;
      } else {
        this.videoflag = true;
      }
    this.assign_layout(this.textflag, this.imageflag, this.videoflag);
  }

  assign_layout(isText, isImage, isVideo) {
    if (isText && isImage && isVideo) {
      this.type = 'all';
    } else if ((isText && isImage && !isVideo) || (isText && !isImage && isVideo) || (!isText && isImage && isVideo)) {
      this.type = 'two';
    } else {
      this.type = 'one';
    }
  }
  }
