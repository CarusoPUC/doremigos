import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pianore } from './pianore';

describe('Pianore', () => {
  let component: Pianore;
  let fixture: ComponentFixture<Pianore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pianore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pianore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
