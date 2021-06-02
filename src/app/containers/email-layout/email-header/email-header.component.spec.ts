import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { emailHeaderComponent } from './email-header.component';

describe('emailHeaderComponent', () => {
  let component: emailHeaderComponent;
  let fixture: ComponentFixture<emailHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [emailHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(emailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
