import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaintenanceInfoComponent } from './create-maintenance-info.component';

describe('CreateMaintenanceInfoComponent', () => {
  let component: CreateMaintenanceInfoComponent;
  let fixture: ComponentFixture<CreateMaintenanceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMaintenanceInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMaintenanceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
