import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, fromEvent, of, merge } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';
import { ConnectionStatus } from './connection-status.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectionStatusService {

  private connectionStatus$ = new BehaviorSubject<ConnectionStatus>({
    isNetworkAccessible: window.navigator.onLine
  } as ConnectionStatus);

  constructor() {
    this.checkNetworkConnectionStatus()
      .pipe(debounceTime(300))
      .subscribe((connectionStatus) => this.connectionStatus$.next(connectionStatus));
   }

  getConnectionStatus(): Observable<ConnectionStatus> {
    return this.connectionStatus$.asObservable();
  }

  private checkNetworkConnectionStatus(): Observable<ConnectionStatus> {
    return merge(this.getOnlineEventStream(), this.getOfflineEventStream())
      .pipe(switchMap(isNetworkAccessible => of( { isNetworkAccessible } as ConnectionStatus)));
  }

  private getOnlineEventStream(): Observable<boolean> {
    return fromEvent(window, 'online')
      .pipe(
        switchMap(() => of(true))
      );
  }

  private getOfflineEventStream(): Observable<boolean> {
    return fromEvent(window, 'offline')
      .pipe(
        switchMap(() => of(false))
      );
  }
}
