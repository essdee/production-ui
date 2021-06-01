import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdcComponent } from './viewdc.component';

describe('ViewdcComponent', () => {
  let component: ViewdcComponent;
  let fixture: ComponentFixture<ViewdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
