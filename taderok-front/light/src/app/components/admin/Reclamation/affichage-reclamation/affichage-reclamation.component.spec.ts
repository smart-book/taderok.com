import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageReclamationComponent } from './affichage-reclamation.component';

describe('AffichageReclamationComponent', () => {
  let component: AffichageReclamationComponent;
  let fixture: ComponentFixture<AffichageReclamationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageReclamationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
