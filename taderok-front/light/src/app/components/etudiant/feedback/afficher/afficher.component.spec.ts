import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherComponent } from './afficher.component';

describe('AfficherComponent', () => {
  let component: AfficherComponent;
  let fixture: ComponentFixture<AfficherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
