import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Continua } from './continua';

describe('Continua', () => {
  let component: Continua;
  let fixture: ComponentFixture<Continua>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Continua]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Continua);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
