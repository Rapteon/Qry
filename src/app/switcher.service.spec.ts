import { TestBed } from '@angular/core/testing';

import { SwitcherService } from './switcher.service';

describe('SwitcherService', () => {
  let service: SwitcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
