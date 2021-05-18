import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgrnComponent } from './newgrn.component';

describe('NewgrnComponent', () => {
  let component: NewgrnComponent;
  let fixture: ComponentFixture<NewgrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewgrnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewgrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
