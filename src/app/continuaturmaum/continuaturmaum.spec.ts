import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Continuaturmaum } from './continuaturmaum';

describe('Continuaturmaum', () => {
  let component: Continuaturmaum;
  let fixture: ComponentFixture<Continuaturmaum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Continuaturmaum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Continuaturmaum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
