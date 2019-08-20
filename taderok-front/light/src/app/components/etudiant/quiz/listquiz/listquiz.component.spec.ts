import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListquizComponent } from './listquiz.component';

describe('ListquizComponent', () => {
  let component: ListquizComponent;
  let fixture: ComponentFixture<ListquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
