import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pianodo } from './pianodo';

describe('Pianodo', () => {
  let component: Pianodo;
  let fixture: ComponentFixture<Pianodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pianodo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pianodo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
