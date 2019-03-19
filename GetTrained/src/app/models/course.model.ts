import { Content } from './content.model';
export class Course {
    course_title: String;
    course_description: String;
    course_category: String;
    course_learners: Array<String>;
    course_created_date: String;
    course_modified_date: String;
    course_status: String;
    course_contents: Array<Content>;
    course_created_by: String;

    constructor(title: string) {
      this.course_title = title;
    }
}
