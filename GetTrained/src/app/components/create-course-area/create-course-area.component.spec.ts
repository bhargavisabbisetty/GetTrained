import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseAreaComponent } from './create-course-area.component';

describe('CreateCourseAreaComponent', () => {
  let component: CreateCourseAreaComponent;
  let fixture: ComponentFixture<CreateCourseAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCourseAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCourseAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
