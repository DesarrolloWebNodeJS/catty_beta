import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioPostComponent } from './portafolio-post.component';

describe('PortafolioPostComponent', () => {
  let component: PortafolioPostComponent;
  let fixture: ComponentFixture<PortafolioPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafolioPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
