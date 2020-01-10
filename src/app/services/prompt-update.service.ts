import { Injectable } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PromptUpdateService {

  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      if (this.promptUser(event)) {
        updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }

  promptUser($event: UpdateAvailableEvent) {
    return window.confirm('Update?');
  }
}
