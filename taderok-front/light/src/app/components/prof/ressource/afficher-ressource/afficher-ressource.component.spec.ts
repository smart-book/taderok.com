import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherRessourceComponent } from './afficher-ressource.component';

describe('AfficherRessourceComponent', () => {
  let component: AfficherRessourceComponent;
  let fixture: ComponentFixture<AfficherRessourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherRessourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
