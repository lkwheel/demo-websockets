import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { demoRxStompConfig } from './demo-stomp-config';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: InjectableRxStompConfig,
      useValue: demoRxStompConfig,
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
