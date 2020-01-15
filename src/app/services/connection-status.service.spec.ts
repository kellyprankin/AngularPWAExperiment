import { TestBed } from '@angular/core/testing';

import { ConnectionStatusService } from './connection-status.service';
import { SwUpdate, ServiceWorkerModule } from '@angular/service-worker';

describe('ConnectionStatusService', () => {
  let service: ConnectionStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServiceWorkerModule.register('', {enabled: false})],
      providers: [SwUpdate]
    });

    service = TestBed.inject(ConnectionStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
