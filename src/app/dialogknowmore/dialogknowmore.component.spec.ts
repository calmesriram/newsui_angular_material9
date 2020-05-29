import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogknowmoreComponent } from './dialogknowmore.component';

describe('DialogknowmoreComponent', () => {
  let component: DialogknowmoreComponent;
  let fixture: ComponentFixture<DialogknowmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogknowmoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogknowmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
