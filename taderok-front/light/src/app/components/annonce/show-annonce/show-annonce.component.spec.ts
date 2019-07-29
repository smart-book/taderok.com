import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAnnonceComponent } from './show-annonce.component';

describe('ShowAnnonceComponent', () => {
  let component: ShowAnnonceComponent;
  let fixture: ComponentFixture<ShowAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
