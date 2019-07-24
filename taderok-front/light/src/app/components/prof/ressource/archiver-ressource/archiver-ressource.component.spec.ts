import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiverRessourceComponent } from './archiver-ressource.component';

describe('ArchiverRessourceComponent', () => {
  let component: ArchiverRessourceComponent;
  let fixture: ComponentFixture<ArchiverRessourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiverRessourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiverRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
