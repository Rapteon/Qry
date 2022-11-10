import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSwitcherComponent } from './input-switcher.component';

describe('InputSwitcherComponent', () => {
  let component: InputSwitcherComponent;
  let fixture: ComponentFixture<InputSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSwitcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
