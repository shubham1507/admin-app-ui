import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChargingStationComponent } from './create-charging-station.component';

describe('CreateChargingStationComponent', () => {
  let component: CreateChargingStationComponent;
  let fixture: ComponentFixture<CreateChargingStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChargingStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChargingStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
