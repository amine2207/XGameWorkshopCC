import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaisserCommentaireComponent } from './laisser-commentaire.component';

describe('LaisserCommentaireComponent', () => {
  let component: LaisserCommentaireComponent;
  let fixture: ComponentFixture<LaisserCommentaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaisserCommentaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaisserCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
