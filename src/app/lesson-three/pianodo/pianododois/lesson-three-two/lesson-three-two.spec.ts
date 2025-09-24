import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonThreeTwo } from './lesson-three-two';

describe('LessonThreeTwo', () => {
  let component: LessonThreeTwo;
  let fixture: ComponentFixture<LessonThreeTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonThreeTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonThreeTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
