import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSeancesComponent } from './liste-seances.component';

describe('ListeSeancesComponent', () => {
  let component: ListeSeancesComponent;
  let fixture: ComponentFixture<ListeSeancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeSeancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSeancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
