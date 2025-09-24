import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Muitobemdo } from './muitobemre';

describe('Muitobemdo', () => {
  let component: Muitobemdo;
  let fixture: ComponentFixture<Muitobemdo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Muitobemdo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Muitobemdo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
