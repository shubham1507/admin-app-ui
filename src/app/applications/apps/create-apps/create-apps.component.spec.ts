import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppsComponent } from './create-apps.component';

describe('CreateAppsComponent', () => {
  let component: CreateAppsComponent;
  let fixture: ComponentFixture<CreateAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
