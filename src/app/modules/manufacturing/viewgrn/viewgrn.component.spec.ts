import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgrnComponent } from './viewgrn.component';

describe('ViewgrnComponent', () => {
  let component: ViewgrnComponent;
  let fixture: ComponentFixture<ViewgrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewgrnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
