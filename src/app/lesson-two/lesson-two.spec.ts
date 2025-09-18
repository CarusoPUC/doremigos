import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTwo } from './lesson-two';

describe('LessonTwo', () => {
  let component: LessonTwo;
  let fixture: ComponentFixture<LessonTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
