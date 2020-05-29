import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogdeletioncomponentComponent } from './dialogdeletioncomponent.component';

describe('DialogdeletioncomponentComponent', () => {
  let component: DialogdeletioncomponentComponent;
  let fixture: ComponentFixture<DialogdeletioncomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogdeletioncomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogdeletioncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
