import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarProfComponent } from './calendar-prof.component';

describe('CalendarProfComponent', () => {
  let component: CalendarProfComponent;
  let fixture: ComponentFixture<CalendarProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
