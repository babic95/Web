import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVecihleComponent } from './add-vecihle.component';

describe('AddVecihleComponent', () => {
  let component: AddVecihleComponent;
  let fixture: ComponentFixture<AddVecihleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVecihleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVecihleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
