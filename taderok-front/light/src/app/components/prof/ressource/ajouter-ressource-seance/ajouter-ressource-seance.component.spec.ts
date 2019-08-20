import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRessourceSeanceComponent } from './ajouter-ressource-seance.component';

describe('AjouterRessourceSeanceComponent', () => {
  let component: AjouterRessourceSeanceComponent;
  let fixture: ComponentFixture<AjouterRessourceSeanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterRessourceSeanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterRessourceSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
