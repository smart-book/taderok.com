import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSeancesProfComponent } from './liste-seances-prof.component';

describe('ListeSeancesProfComponent', () => {
  let component: ListeSeancesProfComponent;
  let fixture: ComponentFixture<ListeSeancesProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeSeancesProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSeancesProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
