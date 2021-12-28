package com.example.demowebsocketserver.config;

import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Component
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

  /**
   * Enables SockJS to identify the connection endpoint.
   * @param registry
   */
  @Override
  public void registerStompEndpoints(StompEndpointRegistry registry) {
    registry.addEndpoint("/demo")
        .setAllowedOrigins("http://localhost:4200")
        .withSockJS();
  }

  /**
   * Creates a simple in-memory message broker for this test. In production it would be
   * replaced by a real broker such as RabbitMQ or Kafka. The destinations would be prefixed
   * by /topic.
   * <br/>
   * This also designates the inbound messages for controller endpoints annotated with @MessageMapping
   * when prefixed with /app.
   * @param registry the registry
   */
  @Override
  public void configureMessageBroker(MessageBrokerRegistry registry) {
    registry.enableSimpleBroker("/topic");
    registry.setApplicationDestinationPrefixes("/app");
  }
}
