import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Metrorapido } from './metrorapido';

describe('Metrorapido', () => {
  let component: Metrorapido;
  let fixture: ComponentFixture<Metrorapido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Metrorapido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Metrorapido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
