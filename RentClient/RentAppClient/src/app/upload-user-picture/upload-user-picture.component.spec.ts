import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadUserPictureComponent } from './upload-user-picture.component';

describe('UploadUserPictureComponent', () => {
  let component: UploadUserPictureComponent;
  let fixture: ComponentFixture<UploadUserPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadUserPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadUserPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
