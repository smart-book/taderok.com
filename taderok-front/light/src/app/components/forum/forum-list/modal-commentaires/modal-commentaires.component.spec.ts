import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCommentairesComponent } from './modal-commentaires.component';

describe('ModalCommentairesComponent', () => {
  let component: ModalCommentairesComponent;
  let fixture: ComponentFixture<ModalCommentairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCommentairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCommentairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
