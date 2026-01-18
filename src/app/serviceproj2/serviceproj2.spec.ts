import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serviceproj2 } from './serviceproj2';

describe('Serviceproj2', () => {
  let component: Serviceproj2;
  let fixture: ComponentFixture<Serviceproj2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Serviceproj2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Serviceproj2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
