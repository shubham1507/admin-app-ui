import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCalendarNgComponent } from './full-calendar-ng.component';

describe('FullCalendarNgComponent', () => {
  let component: FullCalendarNgComponent;
  let fixture: ComponentFixture<FullCalendarNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullCalendarNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCalendarNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
