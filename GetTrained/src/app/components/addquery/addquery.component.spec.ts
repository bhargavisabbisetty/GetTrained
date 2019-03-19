import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddqueryComponent } from './addquery.component';

describe('AddqueryComponent', () => {
  let component: AddqueryComponent;
  let fixture: ComponentFixture<AddqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
