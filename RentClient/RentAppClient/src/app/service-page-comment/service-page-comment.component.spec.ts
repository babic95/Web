import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePageCommentComponent } from './service-page-comment.component';

describe('ServicePageCommentComponent', () => {
  let component: ServicePageCommentComponent;
  let fixture: ComponentFixture<ServicePageCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePageCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePageCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
