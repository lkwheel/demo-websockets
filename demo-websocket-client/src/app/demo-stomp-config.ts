import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';
import * as SockJS from 'sockjs-client';

export const demoRxStompConfig: InjectableRxStompConfig = {
  // brokerURL: 'ws://127.0.0.1:8085/topic',
  webSocketFactory: function() {
    return new SockJS('http://localhost:8085/demo');
  },
  heartbeatIncoming: 0,
  heartbeatOutgoing: 20000,
  reconnectDelay: 200,
  debug: (msg: string): void => {
    console.log(new Date(), msg);
  }
}
