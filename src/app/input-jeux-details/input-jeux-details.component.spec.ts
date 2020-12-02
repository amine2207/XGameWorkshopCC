import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputJeuxDetailsComponent } from './input-jeux-details.component';

describe('InputJeuxDetailsComponent', () => {
  let component: InputJeuxDetailsComponent;
  let fixture: ComponentFixture<InputJeuxDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputJeuxDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputJeuxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
