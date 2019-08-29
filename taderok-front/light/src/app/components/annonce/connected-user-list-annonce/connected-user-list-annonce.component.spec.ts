import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedUserListAnnonceComponent } from './connected-user-list-annonce.component';

describe('ConnectedUserListAnnonceComponent', () => {
  let component: ConnectedUserListAnnonceComponent;
  let fixture: ComponentFixture<ConnectedUserListAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectedUserListAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedUserListAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
