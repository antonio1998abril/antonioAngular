import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteDemoComponent } from './route-demo/route-demo.component';
import { RouteHomeRoutingModule } from './route-home/route-home-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RouteDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouteHomeRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
