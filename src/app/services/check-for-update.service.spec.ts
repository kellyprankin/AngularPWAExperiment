import { TestBed } from '@angular/core/testing';

import { CheckForUpdateService } from './check-for-update.service';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';

describe('CheckForUpdateService', () => {
  let service: CheckForUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServiceWorkerModule.register('', {enabled: false})],
      providers: [SwUpdate]

    });
    service = TestBed.inject(CheckForUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
