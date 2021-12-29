import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';
import * as SockJS from 'sockjs-client';

export const devRxStompConfig: InjectableRxStompConfig = {
  webSocketFactory: function () {
    return new SockJS('http://localhost:8085/demo');
  },
  heartbeatIncoming: 20000,
  heartbeatOutgoing: 20000,
  reconnectDelay: 300,
  debug: (msg: string): void => {
    console.log(new Date(), msg);
  },
};

export const prodRxStompConfig: InjectableRxStompConfig = {
  brokerURL: 'ws://127.0.0.1:8085/topic',
  heartbeatIncoming: 20000,
  heartbeatOutgoing: 20000,
  reconnectDelay: 300,
};
