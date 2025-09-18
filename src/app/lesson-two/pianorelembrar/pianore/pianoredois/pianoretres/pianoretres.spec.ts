import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pianoretres } from './pianoretres';

describe('Pianoretres', () => {
  let component: Pianoretres;
  let fixture: ComponentFixture<Pianoretres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pianoretres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pianoretres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
