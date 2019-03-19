import { TestBed } from '@angular/core/testing';

import { PreventAccessService } from './prevent-access.service';

describe('PreventAccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreventAccessService = TestBed.get(PreventAccessService);
    expect(service).toBeTruthy();
  });
});
