package com.example.demowebsocketserver.controllers;

import com.example.demowebsocketserver.model.Subscription;
import com.example.demowebsocketserver.model.SubscriptionRequest;
import java.util.UUID;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class SubscriptionController {

  /**
   * SubscriptionRequest messages sent to this /subscribe destination will broadcast
   * that the SubscriptionRequest.user has a Subscription to this topic.
   * <br/>
   * This will broadcast to all users subscribed to the /topic/subscriptions
   * @param request payload is a SubscriptionRequest message
   * @return the Subscription for this user
   * @throws Exception
   */
  @MessageMapping("/subscribe")
  @SendTo("/topic/subscriptions")
  public Subscription subscribe(SubscriptionRequest request) throws Exception {
    Thread.sleep(1000);
    return new Subscription(UUID.randomUUID().toString(), request.getUser(), request.getTopic(),
      "/subscribe");
  }
}
