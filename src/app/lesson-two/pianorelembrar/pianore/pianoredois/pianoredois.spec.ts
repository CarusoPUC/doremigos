import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pianoredois } from './pianoredois';

describe('Pianoredois', () => {
  let component: Pianoredois;
  let fixture: ComponentFixture<Pianoredois>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pianoredois]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pianoredois);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
