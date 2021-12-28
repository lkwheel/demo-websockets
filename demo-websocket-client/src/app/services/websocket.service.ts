import { Injectable } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { RxStompState } from '@stomp/rx-stomp';
import { Message } from '@stomp/stompjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  public connectionStatus$: Observable<string>;

  constructor(private rxStompService: RxStompService) {
    this.connectionStatus$ = rxStompService.connectionState$.pipe(
      map(state => {
        // convert numeric RxStompState to string
        return RxStompState[state];
      })
    );
  }

  public getSubscriptionFeed(topic: string): Observable<Message> {
    return this.rxStompService.watch(topic);
  }

  public publishToFeed(topic: string, message: any): void {
    this.rxStompService.publish({ destination: '/app/subscribe', body: JSON.stringify(message) });
  }
}
