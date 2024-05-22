import { TestBed } from '@angular/core/testing';

import { ModuleProviderService } from './module-provider.service';

describe('ModuleProviderService', () => {
  let service: ModuleProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
