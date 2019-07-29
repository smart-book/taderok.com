import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleProfComponent } from './schedule-prof.component';

describe('ScheduleProfComponent', () => {
  let component: ScheduleProfComponent;
  let fixture: ComponentFixture<ScheduleProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
