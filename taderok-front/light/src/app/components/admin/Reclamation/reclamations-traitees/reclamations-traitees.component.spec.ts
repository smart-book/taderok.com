import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationsTraiteesComponent } from './reclamations-traitees.component';

describe('ReclamationsTraiteesComponent', () => {
  let component: ReclamationsTraiteesComponent;
  let fixture: ComponentFixture<ReclamationsTraiteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamationsTraiteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationsTraiteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
