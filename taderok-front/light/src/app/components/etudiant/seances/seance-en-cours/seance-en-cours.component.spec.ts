import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceEnCoursComponent } from './seance-en-cours.component';

describe('SeanceEnCoursComponent', () => {
  let component: SeanceEnCoursComponent;
  let fixture: ComponentFixture<SeanceEnCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeanceEnCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
