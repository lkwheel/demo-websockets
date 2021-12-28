package com.example.demowebsocketserver.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Subscription {

  private String clientId;
  private String user;
  private String topic;
  private String endpoint;

}
