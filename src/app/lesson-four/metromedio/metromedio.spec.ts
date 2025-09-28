import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Metromedio } from './metromedio';

describe('Metromedio', () => {
  let component: Metromedio;
  let fixture: ComponentFixture<Metromedio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Metromedio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Metromedio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
