import { TestBed } from '@angular/core/testing';

import { KitPackService } from './kit-pack.service';

describe('KitPackService', () => {
  let service: KitPackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KitPackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
