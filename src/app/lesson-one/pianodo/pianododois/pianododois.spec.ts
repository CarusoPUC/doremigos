import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pianododois } from './pianododois';

describe('Pianododois', () => {
  let component: Pianododois;
  let fixture: ComponentFixture<Pianododois>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pianododois]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pianododois);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
