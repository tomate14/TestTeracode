import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeMeetingComponent } from './charge-meeting.component';

describe('ChargeMeetingComponent', () => {
  let component: ChargeMeetingComponent;
  let fixture: ComponentFixture<ChargeMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
