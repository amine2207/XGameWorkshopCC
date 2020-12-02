import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJeuComponent } from './add-jeu.component';

describe('AddJeuComponent', () => {
  let component: AddJeuComponent;
  let fixture: ComponentFixture<AddJeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
