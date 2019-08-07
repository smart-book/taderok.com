import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquizComponent } from './addquiz.component';

describe('AddquizComponent', () => {
  let component: AddquizComponent;
  let fixture: ComponentFixture<AddquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
