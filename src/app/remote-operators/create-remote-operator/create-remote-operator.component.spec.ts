import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRemoteOperatorComponent } from './create-remote-operator.component';

describe('CreateRemoteOperatorComponent', () => {
  let component: CreateRemoteOperatorComponent;
  let fixture: ComponentFixture<CreateRemoteOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRemoteOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRemoteOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
