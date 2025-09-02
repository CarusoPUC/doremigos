import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonOne } from './lesson-one';

describe('LessonOne', () => {
  let component: LessonOne;
  let fixture: ComponentFixture<LessonOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
