import { TestBed } from '@angular/core/testing';

import { PromptUpdateService } from './prompt-update.service';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';

describe('PromptUpdateService', () => {
  let service: PromptUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServiceWorkerModule.register('', {enabled: false})],
      providers: [SwUpdate]

    });
    service = TestBed.inject(PromptUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
