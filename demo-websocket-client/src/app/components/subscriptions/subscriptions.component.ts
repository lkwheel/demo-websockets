import { Component, OnDestroy, OnInit } from '@angular/core';
import { Message } from '@stomp/stompjs';
import { Subscription } from 'rxjs';
import { SubscriptionRequest } from 'src/app/models/SubscriptionRequest';
import { TopicSubscription } from 'src/app/models/TopicSubscription';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss'],
})
export class SubscriptionsComponent implements OnInit, OnDestroy {
  public receivedMessages: TopicSubscription[] = [];
  topicSubscription!: Subscription;

  public stompConnState$;

  constructor(private websocketService: WebsocketService) {
    this.stompConnState$ = this.websocketService.connectionStatus$
  }

  ngOnInit() {
    this.topicSubscription = this.websocketService
      .getSubscriptionFeed('/topic/subscriptions')
      .subscribe((message: Message) => {
        const sub = JSON.parse(message.body) as TopicSubscription;
        this.receivedMessages.push(sub);
      });
  }

  ngOnDestroy(): void {
    this.topicSubscription.unsubscribe();
  }

  onSendMessage() {
    const message: SubscriptionRequest = {
      user: 'test',
      topic: '/topic/subscriptions',
    };
    this.websocketService.publishToFeed('/app/subscribe', message);
  }
}
