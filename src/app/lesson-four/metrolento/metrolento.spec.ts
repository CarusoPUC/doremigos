import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Metrolento } from './metrolento';

describe('Metrolento', () => {
  let component: Metrolento;
  let fixture: ComponentFixture<Metrolento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Metrolento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Metrolento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
