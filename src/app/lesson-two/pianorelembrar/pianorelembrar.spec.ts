import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pianorelembrar } from './pianorelembrar';

describe('Pianorelembrar', () => {
  let component: Pianorelembrar;
  let fixture: ComponentFixture<Pianorelembrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pianorelembrar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pianorelembrar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
