import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BradcComponent } from './bradc.component';

describe('BradcComponent', () => {
  let component: BradcComponent;
  let fixture: ComponentFixture<BradcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BradcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BradcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
