import { Component, OnDestroy, OnInit } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { IMessage, Message } from '@stomp/stompjs';
import { TopicSubscription } from 'src/app/models/TopicSubscription';
import { SubscriptionRequest } from 'src/app/models/SubscriptionRequest';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit, OnDestroy {

  public receivedMessages: TopicSubscription[] = [];
  topicSubscription!: Subscription;

  constructor(private rxStompService: RxStompService) {}

  ngOnInit() {
    this.topicSubscription = this.rxStompService.watch('/topic/subscriptions').subscribe((message: Message) => {
      const subscriber = JSON.parse(message.body) as TopicSubscription;
      this.receivedMessages.push(subscriber);
    });
  }

  ngOnDestroy(): void {
      this.topicSubscription.unsubscribe();
  }

  onSendMessage() {
    const message: SubscriptionRequest = {
      user: 'test',
      topic: '/topic/subscriptions'
    };
    this.rxStompService.publish({ destination: '/app/subscribe', body: JSON.stringify(message) });
  }

}
