import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Muitobemreturmaum } from './muitobemreturmaum';

describe('Muitobemdo', () => {
  let component: Muitobemreturmaum;
  let fixture: ComponentFixture<Muitobemreturmaum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Muitobemreturmaum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Muitobemreturmaum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
