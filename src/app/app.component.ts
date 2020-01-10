import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CheckForUpdateService } from './services/check-for-update.service';
import { PromptUpdateService } from './services/prompt-update.service';
import { ConnectionStatusService } from './services/connection-status.service';
import { ConnectionStatus } from './services/connection-status.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'angular-latest-test';
  currentConnectionStatus$: Observable<ConnectionStatus>;

  constructor(
    private connectionStatusService: ConnectionStatusService,
    private checkForUpdateService: CheckForUpdateService,
    private promptUpdateService: PromptUpdateService
  ) {

  }

  ngOnInit(): void {
    this.currentConnectionStatus$ = this.connectionStatusService.getConnectionStatus();
  }
}
