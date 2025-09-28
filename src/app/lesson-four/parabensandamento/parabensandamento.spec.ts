import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parabensandamento } from './parabensandamento';

describe('Parabensandamento', () => {
  let component: Parabensandamento;
  let fixture: ComponentFixture<Parabensandamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parabensandamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parabensandamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
