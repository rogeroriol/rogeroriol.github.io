import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkdetailComponent } from './homeworkdetail.component';

describe('HomeworkdetailComponent', () => {
  let component: HomeworkdetailComponent;
  let fixture: ComponentFixture<HomeworkdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeworkdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
