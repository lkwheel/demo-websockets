import { Component, OnInit } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import { Subscription } from 'src/app/models/Subscription';
import { SubscriptionRequest } from 'src/app/models/SubscriptionRequest';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  public receivedMessages: string[] = [];

  constructor(private rxStompService: RxStompService) {}

  ngOnInit() {
    this.rxStompService.watch('/topic/subscriptions').subscribe((message: Message) => {
      const subscriber = JSON.parse(message.body).user
      this.receivedMessages.push(subscriber);
    });
  }

  onSendMessage() {
    const message: SubscriptionRequest = {
      user: 'test',
      topic: '/topic/subscriptions'
    };
    this.rxStompService.publish({ destination: '/app/subscribe', body: JSON.stringify(message) });
  }

}
