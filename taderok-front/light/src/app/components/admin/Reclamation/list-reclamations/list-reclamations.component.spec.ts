import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReclamationsComponent } from './list-reclamations.component';

describe('ListReclamationsComponent', () => {
  let component: ListReclamationsComponent;
  let fixture: ComponentFixture<ListReclamationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReclamationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReclamationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
