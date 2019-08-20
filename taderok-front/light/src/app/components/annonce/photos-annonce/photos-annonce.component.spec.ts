import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosAnnonceComponent } from './photos-annonce.component';

describe('PhotosAnnonceComponent', () => {
  let component: PhotosAnnonceComponent;
  let fixture: ComponentFixture<PhotosAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
