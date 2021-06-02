import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceProviderComponent } from './create-service-provider.component';

describe('CreateServiceProviderComponent', () => {
  let component: CreateServiceProviderComponent;
  let fixture: ComponentFixture<CreateServiceProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateServiceProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServiceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
