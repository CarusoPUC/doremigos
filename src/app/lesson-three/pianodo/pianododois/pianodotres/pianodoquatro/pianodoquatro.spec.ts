import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pianodoquatro } from './pianodoquatro';

describe('Pianodoquatro', () => {
  let component: Pianodoquatro;
  let fixture: ComponentFixture<Pianodoquatro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pianodoquatro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pianodoquatro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
