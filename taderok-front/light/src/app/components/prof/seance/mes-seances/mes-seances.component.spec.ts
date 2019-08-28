import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesSeancesComponent } from './mes-seances.component';

describe('MesSeancesComponent', () => {
  let component: MesSeancesComponent;
  let fixture: ComponentFixture<MesSeancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesSeancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesSeancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
