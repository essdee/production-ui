import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdcComponent } from './newdc.component';

describe('NewdcComponent', () => {
  let component: NewdcComponent;
  let fixture: ComponentFixture<NewdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
