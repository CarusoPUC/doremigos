import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonFour } from './lesson-four';

describe('LessonFour', () => {
  let component: LessonFour;
  let fixture: ComponentFixture<LessonFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonFour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonFour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
