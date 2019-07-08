import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcromComponent } from './breadcrom.component';

describe('BreadcromComponent', () => {
  let component: BreadcromComponent;
  let fixture: ComponentFixture<BreadcromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
