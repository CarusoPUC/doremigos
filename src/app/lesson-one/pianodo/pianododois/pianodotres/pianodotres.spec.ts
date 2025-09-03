import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pianodotres } from './pianodotres';

describe('Pianodotres', () => {
  let component: Pianodotres;
  let fixture: ComponentFixture<Pianodotres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pianodotres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pianodotres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
