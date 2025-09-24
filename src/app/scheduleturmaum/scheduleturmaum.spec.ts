import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scheduleturmaum } from './scheduleturmaum';

describe('Scheduleturmaum', () => {
  let component: Scheduleturmaum;
  let fixture: ComponentFixture<Scheduleturmaum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scheduleturmaum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scheduleturmaum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
