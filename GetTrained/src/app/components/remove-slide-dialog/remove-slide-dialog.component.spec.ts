import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveSlideDialogComponent } from './remove-slide-dialog.component';

describe('RemoveSlideDialogComponent', () => {
  let component: RemoveSlideDialogComponent;
  let fixture: ComponentFixture<RemoveSlideDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveSlideDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveSlideDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
