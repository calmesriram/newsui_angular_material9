import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazylodingComponent } from './lazyloding.component';

describe('LazylodingComponent', () => {
  let component: LazylodingComponent;
  let fixture: ComponentFixture<LazylodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazylodingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazylodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
