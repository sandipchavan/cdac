
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//JWT tokenization
import { JwtModule } from '@auth0/angular-jwt';
import { FeedsComponent } from './feeds/feeds.component';

export function tokenGetter() {
  return JSON.parse(localStorage.getItem('access_token'));
}

@NgModule({
  declarations: [
    AppComponent,
    FeedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8000'],
        blacklistedRoutes: ['example.com/examplebadroute/'],

      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
