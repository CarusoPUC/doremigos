import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardturmaum } from './dashboardturmaum';

describe('Dashboardturmaum', () => {
  let component: Dashboardturmaum;
  let fixture: ComponentFixture<Dashboardturmaum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboardturmaum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashboardturmaum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
