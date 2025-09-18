import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonThree } from './lesson-three';

describe('LessonThree', () => {
  let component: LessonThree;
  let fixture: ComponentFixture<LessonThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
