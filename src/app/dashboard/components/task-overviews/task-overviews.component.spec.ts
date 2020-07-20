import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOverviewsComponent } from './task-overviews.component';

describe('TaskOverviewsComponent', () => {
  let component: TaskOverviewsComponent;
  let fixture: ComponentFixture<TaskOverviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskOverviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskOverviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
